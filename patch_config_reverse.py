import re

with open('docusaurus.config.js', 'r') as f:
    config = f.read()

reverse_logic = """
// Reverse sidebar items recursively, but keep index at top
function reverseSidebar(items) {
  const isIndex = (item) => item.type === 'doc' && item.id === 'index';
  const indexItems = items.filter(isIndex);
  const otherItems = items.filter((item) => !isIndex(item));
  
  const reversedOthers = otherItems.map((item) => {
    if (item.type === 'category') {
      return {...item, items: reverseSidebar(item.items)};
    }
    return item;
  });
  reversedOthers.reverse();
  return [...indexItems, ...reversedOthers];
}

/** @type {import('@docusaurus/types').Config} */
const config = {"""

config = config.replace("/** @type {import('@docusaurus/types').Config} */\nconst config = {", reverse_logic)

generator = """sidebarPath: './sidebarsBotcLogs.js',
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return reverseSidebar(sidebarItems);
        },"""
config = config.replace("sidebarPath: './sidebarsBotcLogs.js',", generator)

generator2 = """sidebarPath: './sidebarsAvalonLogs.js',
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return reverseSidebar(sidebarItems);
        },"""
config = config.replace("sidebarPath: './sidebarsAvalonLogs.js',", generator2)

with open('docusaurus.config.js', 'w') as f:
    f.write(config)
