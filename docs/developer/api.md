---
sidebar_position: 2
---

# 🔑 API

본 서비스 **API**를 사용해 서비스·배포·설정을 프로그래밍 방식으로 제어할 수 있습니다.

## API Key 발급

1. 로그인 후 **계정** → **API Key** 메뉴로 이동합니다.
2. **API Key 생성**을 클릭하고 **이름·권한·만료일**을 설정합니다.
3. 생성된 Key는 **한 번만** 표시되므로 안전한 곳에 복사해 두세요.

:::caution 보안
API Key는 외부에 노출되지 않도록 관리하세요. 읽기 전용이면 충분한 경우 **READ_ONLY** 권한만 부여하는 것을 권장합니다.
:::

## 권한

| 권한 | 설명 |
|------|------|
| **전체 권한 (ALL)** | 서비스 생성·수정·삭제, 조회 등 모든 API 사용 가능 |
| **읽기 전용 (READ_ONLY)** | 조회 API만 사용 가능 |

## 기본 사용법

API 요청 시 **헤더**에 API Key를 넣습니다.

```bash
curl -X GET "https://api.your-awen-site.com/api/v1/hosting" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

## 주요 엔드포인트 예시

| 용도 | 메서드 | 경로 예시 |
|------|--------|-----------|
| 서비스 목록 | GET | `/api/v1/hosting` |
| 서비스 상세 | GET | `/api/v1/hosting/:id` |
| 서비스 생성 | POST | `/api/v1/hosting` |
| 배포 실행 | POST | `/api/v1/hosting/:id/deploy` |

실제 base URL과 경로는 운영 환경에 맞게 확인하세요.
