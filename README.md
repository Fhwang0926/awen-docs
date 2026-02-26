# 문서 매뉴얼

Docusaurus로 만든 GitBook 스타일의 제품 매뉴얼입니다. 사이트 제목·푸터 등에는 빌드 시 `SITE_TITLE`(또는 `VITE_APP_TITLE`) 환경 변수가 사용됩니다. awen-web frontend와 동일한 클라우드명을 쓰려면 같은 값을 설정하면 됩니다.

## 구조

- **docs/** – 문서 소스 (Markdown)
- **sidebars.js** – 왼쪽 사이드바 메뉴 구성
- **docusaurus.config.js** – 사이트 제목, URL, 테마 등 설정

## 로컬 실행

```bash
npm install
npm run start
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속합니다. `docs/`, `sidebars.js`, `docusaurus.config.js`, `src/css` 등 수정 시 자동으로 반영됩니다. (파일 감시가 동작하지 않는 환경에서는 `--poll` 옵션이 적용된 상태로 주기적으로 변경을 검사합니다.)

## 빌드

```bash
npm run build
```

`build/` 폴더에 정적 파일이 생성됩니다.

```bash
npm run serve
```

로컬에서 빌드 결과를 미리 볼 수 있습니다.

## 문서 추가 방법

1. `docs/` 아래에 `.md` 파일을 추가합니다.
2. `sidebars.js` 의 해당 카테고리 `items` 에 문서 ID를 추가합니다.  
   - 예: `guides/my-new-doc` (파일 경로는 `docs/guides/my-new-doc.md`)
3. 필요하면 front matter 로 `sidebar_position`, `title` 등을 지정합니다.

## GitBook 스타일 구성

- **문서가 홈**: `routeBasePath: '/'` 로 설정해 문서가 메인 페이지입니다.
- **블로그 비활성화**: 블로그는 사용하지 않습니다.
- **사이드바**: 접기/펼치기, 카테고리 자동 접기 옵션 사용.
- **다음/이전**: 각 문서 하단에 이전·다음 문서 링크가 자동으로 붙습니다.

이 구조를 바탕으로 항목과 문서를 추가·수정하면 됩니다.

## 환경 변수 (빌드 시)

| 변수 | 설명 |
|------|------|
| `SITE_TITLE` | 사이트 제목·푸터에 표시되는 클라우드/서비스명. awen-web의 `VITE_APP_TITLE`과 맞추면 동일한 이름이 노출됩니다. |
| `DOCS_SITE_URL` | 배포된 문서 사이트 URL (선택). |
| `VITE_APP_TITLE` | `SITE_TITLE`이 없을 때 대신 사용. |

로컬에서는 `.env`에 넣거나, CI에서는 Repository variable `SITE_TITLE`을 설정하면 됩니다.

## 다국어 (한국어 / English)

- 기본 로케일: **한국어(ko)**. 영어(en)는 네비게이션 오른쪽 **Locale** 드롭다운에서 선택할 수 있습니다.
- **개발 모드에서 영어가 404인 이유**: Docusaurus 개발 서버는 한 번에 **한 로케일만** 서빙합니다. `npm run start`는 기본(한국어)만 제공하므로, 드롭다운에서 English를 눌러 `/en/`으로 가면 페이지를 찾을 수 없습니다.
- **둘 다 보면서 개발하기**
  - **방법 1** – 한 번에 두 서버 띄우기: `npm run start:both`  
    - 한국어: [http://localhost:3000](http://localhost:3000)  
    - 영어: [http://localhost:3001/en/](http://localhost:3001/en/)
  - **방법 2** – 각각 터미널에서: `npm run start:ko`(한국어, 3000번 포트), `npm run start:en`(영어, 3001번 포트)
  - **방법 3** – 빌드 후 한 서버로: `npm run build` → `npm run serve` → [http://localhost:3000](http://localhost:3000)(한국어), [http://localhost:3000/en/](http://localhost:3000/en/)(영어)
- 문서: `docs/`는 한국어, `i18n/en/docusaurus-plugin-content-docs/current/`는 영어 번역입니다.
- 사이드바·네비게이션 라벨: `i18n/en/` 아래 theme·docs 플러그인 JSON에서 영어 라벨을 관리합니다.

## GitHub Actions

- **Build**: `main` push / PR 시 빌드 후 artifact 업로드.
- **Deploy**: `main` push 시 빌드 후 **GitHub Pages** 배포.

GitHub Pages 사용 시 Repository **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택해야 합니다. 클라우드명을 바꾸려면 Repository **Settings → Secrets and variables → Actions**에서 변수 `SITE_TITLE`을 설정하면 됩니다.

## 실제 배포 (프로덕션)

### 1. GitHub Pages (기본 구성)

이 저장소에는 이미 **GitHub Actions**로 배포하는 워크플로가 들어 있습니다.

1. **Pages 소스 설정**  
   저장소 **Settings → Pages → Build and deployment → Source** 에서 **GitHub Actions** 를 선택합니다.

2. **main에 push**  
   `main` 브랜치에 push 하면 자동으로 `npm run build` 후 GitHub Pages에 배포됩니다.

3. **접속 주소**
   - **조직/유저 사이트** (예: `awen.github.io`):  
     루트에 배포하면 `https://<user 또는 org>.github.io` 로 접속합니다.  
     이 경우 `BASE_URL` 변수를 두지 않으면 기본값 `baseUrl: '/'` 로 빌드됩니다.
   - **프로젝트 사이트** (예: `awen.github.io/awen-docs`):  
     URL이 `https://<user 또는 org>.github.io/awen-docs/` 형태라면,  
     **Settings → Secrets and variables → Actions → Variables** 에서 `BASE_URL` = `/awen-docs/` (끝에 슬래시 포함) 를 추가합니다.  
     빌드 시 이 값이 `baseUrl` 로 사용됩니다.

4. **선택 설정**
   - **사이트 제목**: Variables 에 `SITE_TITLE` 설정 (예: `AWEN Cloud`).
   - **실제 도메인 URL**: 배포된 문서 주소를 고정하고 싶다면 Variables 에 `DOCS_SITE_URL` 설정 (예: `https://docs.example.com`).  
     `docusaurus.config.js` 의 `url` 이 이 값으로 설정되면, 빌드 결과의 canonical/OG URL 이 해당 주소로 나갑니다.

배포가 끝나면 **한국어**는 `/`, **영어**는 `/en/` 이고, 같은 도메인에서 Locale 드롭다운으로 전환됩니다.

### 2. 다른 호스팅 (Netlify, Vercel, S3 등)

- **Netlify / Vercel**: 저장소 연결 후 **Build command** `npm run build`, **Publish directory** `build` 로 설정하면 됩니다.  
  사이트가 **서브경로**에 배포되면 해당 경로를 **Base directory** 또는 환경 변수로 지정하고, Docusaurus `baseUrl` 과 맞춥니다.
- **S3 / 정적 호스팅**: 로컬에서 `npm run build` 한 뒤 `build/` 폴더 내용을 업로드합니다.  
  서브경로에 둘 경우 `baseUrl` 을 그 경로로 설정한 뒤 빌드해야 합니다.

어디에 배포하든 **한국어·영어**는 `build/` 한 번에 포함되므로, 별도 빌드나 서버 분리는 필요 없습니다.
