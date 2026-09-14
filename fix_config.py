with open('docusaurus.config.js', 'r') as f:
    config = f.read()

config = config.replace("""      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },""", """      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },""")

with open('docusaurus.config.js', 'w') as f:
    f.write(config)
