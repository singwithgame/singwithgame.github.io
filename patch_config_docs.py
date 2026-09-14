import re

with open('docusaurus.config.js', 'r') as f:
    config = f.read()

# Replace plugin-content-blog with plugin-content-docs for logs
plugins_str = """plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'botc-logs',
        path: 'botc-logs',
        routeBasePath: 'botc-logs',
        sidebarPath: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'avalon-logs',
        path: 'avalon-logs',
        routeBasePath: 'avalon-logs',
        sidebarPath: false,
      },
    ],
  ],"""

config = re.sub(r'plugins: \[.*?\]\s*,\s*themeConfig:', plugins_str + '\n  themeConfig:', config, flags=re.DOTALL)

with open('docusaurus.config.js', 'w') as f:
    f.write(config)
