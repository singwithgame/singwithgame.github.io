# Keep on Boardgaming 🎲 포털

**Keep on Boardgaming**은 보드게임 모임 참여자를 위한 전용 웹 포털입니다. 기존의 복잡했던 구조를 탈피하고, [Docusaurus](https://docusaurus.io/)의 강력한 **Docs as Code** 아키텍처를 도입하여 **오직 마크다운(Markdown) 작성만으로 전체 사이트가 렌더링**되도록 설계되었습니다.

## 🎯 주요 기능 및 특징

1. **순수 텍스트 기반 관리 (No Code Required)**
   - 자바스크립트나 리액트 지식이 없어도, 깃허브 웹사이트에서 `.md` 파일만 수정하면 홈페이지, 사이드바, 가이드, 세션 기록이 모두 자동으로 업데이트됩니다.
2. **허브 홈페이지 (Home)**
   - `Blood on the Clocktower`, `Avalon`, `Dalmuti`, `Tichu` 등 주요 게임들의 플레이 도우미 앱과 가이드/로그로 직행할 수 있는 반응형 대시보드를 제공합니다.
3. **가이드 및 규칙서 (Guides)**
   - 폴더에 파일을 넣고 `sidebar_position: 숫자`만 적으면 자동으로 좌측 목차(사이드바)가 생성되는 지식 창고입니다. 모바일 기기에서도 상단 GNB(메뉴 바)의 Dropdown을 통해 게임별 가이드를 손쉽게 오갈 수 있습니다.
4. **플레이 기록 (Logs)**
   - `BotC`, `Avalon`, `Diplomacy` 등 게임별로 완전히 독립된 블로그/기록(Log) 시스템을 갖추고 있어 턴별, 세션별 기록을 체계적으로 분류하고 확인할 수 있습니다.

---

## 📁 주요 디렉토리 및 수정 방법

이 레포지토리의 핵심 설정과 콘텐츠는 아래 파일/폴더에서 관리됩니다.

- 🏠 **`src/pages/index.mdx`**: 홈페이지 화면입니다. 안내 문구를 고치거나 새로운 `<GameCard>`를 추가할 수 있습니다.
- 📑 **`config/navbar.yml`**: 포털 상단 헤더 메뉴 바를 설정하는 파일입니다.
- 📖 **`docs/`**: 가이드 및 규칙서 폴더입니다. `botc`, `avalon`, `tichu` 등 각 폴더 안에 `.md` 파일을 자유롭게 추가하면 됩니다.
- 📜 **`botc-logs/`, `avalon-logs/`, `diplomacy-logs/`**: 각 게임의 플레이 기록을 올리는 전용 폴더입니다.

---

## 📝 코드 스니펫 및 작성 가이드 (Code Snippets)

문서를 추가하거나 수정할 때, 아래의 양식을 복사해서 활용하세요!

### 1. 가이드 문서 작성하기 (`docs/` 내부)
`docs/` 하위 폴더에 들어가는 마크다운 파일의 최상단에는 파일의 정보(Frontmatter)를 작성해야 합니다.
```markdown
---
sidebar_position: 1
title: 티츄 초보자 가이드
description: 처음 티츄를 접하는 분들을 위한 요약본입니다.
---

# 티츄 초보자 가이드

여기에 마크다운 문법으로 내용을 작성합니다.
```

### 2. 세션 기록(Log) 작성하기 (`botc-logs/`, `avalon-logs/` 등 내부)
로그 문서는 블로그 형식으로 작성되며, 작성일과 태그, 작성자 정보를 포함해야 합니다. (디플로머시 등 일부 플러그인에 따라 태그 양식이 약간 다를 수 있습니다.)
```markdown
---
title: 2026년 9월 시계탑 세션 기록
date: 2026-09-15
authors:
  - name: 기록자명
tags: [세션기록, 시계탑, 다중플레이]
---

# 세션 요약

여기에 글을 씁니다.

<!-- truncate -->
위의 `<!-- truncate -->` 태그는 목록 보기 화면에서 내용을 자르는 기준선이 됩니다. 이 아래부터는 상세 페이지에만 보입니다!
```

### 3. 홈페이지에 게임 카드 추가하기 (`src/pages/index.mdx`)
홈 화면에 새로운 보드게임을 추가하고 싶을 때 `<GameCard>` 컴포넌트를 복사해서 붙여넣습니다.
```jsx
<GameCard 
  title="새로운 보드게임" 
  url="https://singwithgame.github.io/new_game" 
  guideUrl="/docs/newgame/intro" 
  logUrl="/newgame-logs" 
/>
```
- `url`: 외부 플레이용 도우미 앱이나 외부 툴 링크 (없으면 생략 가능)
- `guideUrl`: `docs/` 내부 가이드 문서 경로 (없으면 생략 가능)
- `logUrl`: 세션 기록 게시판 경로 (없으면 생략 가능)

### 4. 이미지 80% 크기 고정 및 줌(Zoom) 기능 활용
단순 마크다운 이미지 `![이미지 이름](./이미지경로.jpg)`를 써도 자동으로 줌 기능이 동작하지만, **크기를 80%로 조절하고 가운데 정렬**하고 싶다면 아래 코드를 사용하세요.
```jsx
<img 
  src={require("./이미지경로.jpg").default} 
  alt="이미지 설명" 
  style={{ width: "80%", margin: "0 auto 20px auto", display: "block", borderRadius: "8px" }} 
/>
```

---

## 🚀 배포 (Deploy)

복잡한 터미널 명령어는 필요 없습니다! 
웹사이트나 에디터 환경에서 **파일을 저장하고 `Commit & Push` 하는 즉시**, 뒷단에서 GitHub Actions가 사이트를 새로고침하여 약 1~2분 뒤 자동으로 인터넷에 배포합니다. 

## 🛠 로컬 개발 가이드 (선택 사항)

문서 작성이 아닌 전체적인 테마(CSS) 등을 수정하고 미리보기를 원한다면 아래 명령어로 로컬 서버를 띄울 수 있습니다.

```bash
# 의존성 패키지 설치
npm install

# 로컬 개발 서버 실행 (http://localhost:3000)
npm run start
```
