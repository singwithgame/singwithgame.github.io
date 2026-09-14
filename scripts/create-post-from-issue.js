const fs = require('fs');
const path = require('path');

// GitHub Event Data
const eventPath = process.env.GITHUB_EVENT_PATH;
if (!eventPath) {
  console.error('No GITHUB_EVENT_PATH found.');
  process.exit(1);
}

const eventData = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
const issue = eventData.issue;
const titleRaw = issue.title;

// Util: Extract section from Issue Body
function extractSection(body, sectionName) {
  const regex = new RegExp(`### ${sectionName}\\s+([\\s\\S]*?)(?=###|$)`, 'i');
  const match = body.match(regex);
  return match ? match[1].trim() : '';
}

// Generate Slug
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')       
    .replace(/[^\w\-]+/g, '')   
    .replace(/\-\-+/g, '-')     
    .replace(/^-+/, '')         
    .replace(/-+$/, '');        
}

async function run() {
  const isGuide = titleRaw.startsWith('[가이드]');
  const isLog = titleRaw.startsWith('[로그]');

  if (!isGuide && !isLog) {
    console.log('Not a guide or log issue. Exiting.');
    return;
  }

  const body = issue.body;

  if (isGuide) {
    const gameTypeStr = extractSection(body, '게임 선택');
    const title = extractSection(body, '제목');
    const content = extractSection(body, '내용');
    
    let slug = slugify(title);
    if (!slug) slug = `guide-${Date.now()}`;
    const filename = `${slug}.md`;
    
    let subfolder = 'common';
    if (gameTypeStr.includes('BotC')) subfolder = 'botc';
    if (gameTypeStr.includes('Avalon')) subfolder = 'avalon';

    const dir = path.join(__dirname, '../docs', subfolder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const filePath = path.join(dir, filename);
    const fileContent = `---
title: ${title}
---
${content}
`;
    fs.writeFileSync(filePath, fileContent);
    console.log(`Created guide at ${filePath}`);
  }

  if (isLog) {
    const gameTypeStr = extractSection(body, '게임 선택');
    const playDate = extractSection(body, '플레이 날짜');
    const title = extractSection(body, '세션 제목');
    const content = extractSection(body, '내용');

    const isBotc = gameTypeStr.includes('BotC');
    const baseDir = isBotc ? path.join(__dirname, '../botc-logs') : path.join(__dirname, '../avalon-logs');
    
    const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
    const dateMatch = playDate.match(dateRegex);
    const dateFolder = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];

    const targetDir = path.join(baseDir, dateFolder);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.md'));
    const count = files.length + 1;
    const sessionNumber = count.toString().padStart(2, '0');
    
    const filename = `${dateFolder}-session-${sessionNumber}.md`;
    const filePath = path.join(targetDir, filename);

    const fileContent = `---
title: ${title}
date: ${playDate}
---
${content}
`;
    fs.writeFileSync(filePath, fileContent);
    console.log(`Created log at ${filePath}`);
  }
}

run();
