# 제품 매뉴얼

**웹·WAS·DB를 한곳에서 배포하고 운영하는 AI 기반 인프라**의 공식 사용 설명서입니다.  
개발자용 가이드와 사용자 매뉴얼을 한 문서에서 찾을 수 있습니다.

---

## 이 문서에서 다루는 내용

### 개발자를 위한 문서

- **빠르게 시작하기** — 첫 서비스를 나의 서비스에서 만드는 단계별 가이드(플랜 선택 → 서비스형(WEB/WAS/DB/통합) → 소스·도메인 → 검토 및 생성).
- **API** — API Key 발급, 서비스·배포·설정을 프로그래밍으로 제어하는 방법과 주요 엔드포인트.
- **배포 가이드** — GitHub 연동, 수동 업로드, 환경 변수 등 배포 방식 정리.

### 사용자 매뉴얼

- **대시보드** — 인프라 구성과 서비스 현황을 한눈에 보는 방법.
- **나의 서비스(호스팅)** — 웹·WAS·DB 서비스 생성, 목록·상세·상태 확인, 관리(개요/관리/설정) 탭 사용법.
- **나의 AI 비서** — AI 에이전트 배포, 대화·요약·작업 자동화, OpenClaw-Shopping 등 연동.
- **결제 및 구독** — Free/Basic/Pro/Enterprise 플랜, 사용량, 쿠폰, 월간·연간 결제.
- **도구** — 웹 IDE, SQL 도구(쿼리 실행, 성능·AI 분석) 사용 절차.
- **고객지원** — 문의하기, FAQ, 공지사항.
- **계정** — 프로필, 보안, API Key, 회사 정보.

### 참고

- **FAQ**, **변경 이력**으로 자주 묻는 질문과 업데이트 내용을 확인할 수 있습니다.

---

## 문서 보기

- **온라인**: 이 저장소를 GitHub Pages 등으로 배포한 경우, 배포 URL에서 볼 수 있습니다.  
  - 프로젝트 사이트 예: `https://<org 또는 user>.github.io/awen-docs/`  
  - 유저/조직 사이트 예: `https://<org 또는 user>.github.io`  
  - 실제 주소는 저장소 **Settings → Pages**에서 확인하세요.
- **한국어 / English**: 문서는 한국어·영어를 지원하며, 사이트 내 Locale 드롭다운으로 전환할 수 있습니다.

---

## 이 문서 사이트에 대해 (개발·배포)

이 문서는 **Docusaurus**로 빌드된 정적 사이트입니다.

- **로컬 실행**: `npm install` 후 `npm run start` → [http://localhost:3000](http://localhost:3000).  
  한국어·영어 둘 다 보려면 `npm run start:both` (한국어 3000, 영어 3001/en).
- **빌드**: `npm run build` → `build/` 생성. `npm run serve`로 로컬에서 빌드 결과 확인.
- **배포**: `main` 브랜치 push 시 GitHub Actions로 빌드 후 **GitHub Pages**에 배포됩니다.  
  **Settings → Pages → Source**를 **GitHub Actions**로 선택해야 합니다.  
  프로젝트 페이지(예: `/awen-docs/`)로 배포할 때는 Actions Variables에 `BASE_URL=/awen-docs/` 설정.  
  사이트 제목은 Variables의 `SITE_TITLE`로 지정(예: AWEN Cloud).

  **배포 시 "Creating Pages deployment failed" / 404가 나면**: 저장소 **Settings → [Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)** 로 가서 **Build and deployment → Source**를 **GitHub Actions**로 선택한 뒤 저장하세요. Source가 "Deploy from a branch"이거나 비어 있으면 이 오류가 납니다.

  **"Your Docusaurus site did not load properly" / baseUrl 경고가 나오면**: 접속 주소가 `username.github.io/awen-docs/` 형태(프로젝트 페이지)인데 빌드 시 `baseUrl`이 `/`이면 발생합니다. **Settings → Secrets and variables → Actions → Variables**에서 `BASE_URL` = `/awen-docs/` 를 추가한 뒤 워크플로를 다시 실행하세요.
- **비공개 저장소**: GitHub Free에서는 비공개 저장소에 Pages를 켤 수 없습니다. 공개 repo로 두거나, Pro 이상에서 비공개 repo Pages를 사용하거나, Netlify/Vercel 등으로 빌드 결과만 배포하면 됩니다.
- **Lock 파일**: CI는 `npm install`로 동작합니다. `package-lock.json`을 커밋한 뒤 워크플로에서 `cache: 'npm'`과 `npm ci`를 사용하면 재현 가능한 빌드와 캐시를 쓸 수 있습니다.

문서 내용 수정은 `docs/` 아래 마크다운을 편집하고, 메뉴 구성은 `sidebars.js`를 수정하면 됩니다.
