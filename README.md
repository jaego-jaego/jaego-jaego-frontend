# 프로젝트 재고재고

#### 개발환경

- JavaScript
- TypeScript
- React -18^
- Next.JS -14.0.2
- Tailwindcss
- Redux, Redux-toolkit State Management Library
- npm & yarn Package Manager

#### 실행 스크립트

- 의존성 패키지 설치
```bash
yarn install
or
npm install
```
- 로컬 실행
```bash
yarn dev
or
npm run dev
```

#### 버전관리툴

- `Git Flow` 사용

  - 개발
    - 시작
    ```bash 
    git flow feature start [Jira tag]
    ```
    - 종료
    ```bash 
    git flow feature finish [Jira tag]
    ```

  - 릴리즈
    - 버전 확인
    ```bash 
    git tags
    ```
    - 시작
    ```bash 
    git flow release start [next tags]
    ```
    - 종료
    ```bash 
    git flow release finish [next tags]
    ```

- finish 전 push & Pull request로 코드리뷰를 필수로 진행해야함
- feature finish 시 작업하던 feature branch 자동삭제 및 develop에 자동 병합
- release finish 시 작업하던 release branch 자동삭제 및 main에 자동 병합
- release로 tag 생성 시 필히 다음 명령어 입력
    ```bash
    git push --tags
    ```

#### 프로젝트 주요 경로

- /app `page`, `layout` 등 View파일
- /public `이미지`, `폰트` 등 Asset파일
- /src `Redux`, `customHooks`, `components` 등 기능도구
