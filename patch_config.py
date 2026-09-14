import re

with open('docusaurus.config.js', 'r') as f:
    config = f.read()

# Replace blog config with blog: false
config = re.sub(r'blog: \{.*?(?=theme: \{)', 'blog: false,\n        ', config, flags=re.DOTALL)

# Add plugins
plugins_str = """
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'botc-logs',
        routeBasePath: 'botc-logs',
        path: './botc-logs',
        blogTitle: 'BotC Logs',
        blogSidebarTitle: '최근 기록',
        showReadingTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'avalon-logs',
        routeBasePath: 'avalon-logs',
        path: './avalon-logs',
        blogTitle: 'Avalon Logs',
        blogSidebarTitle: '최근 기록',
        showReadingTime: false,
      },
    ],
  ],
  themeConfig:"""

config = config.replace('  themeConfig:', plugins_str)

# Update navbar title
config = config.replace("title: '포털'", "title: 'Home'")

# Remove navbar items
config = re.sub(r'items: \[\n.*?\n.*?\n\s*\],', 'items: [],', config, flags=re.DOTALL)

with open('docusaurus.config.js', 'w') as f:
    f.write(config)
