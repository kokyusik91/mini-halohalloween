# 👻 Halo Halloween!

---

## 📕 프로젝트 내용

```
할로윈에 대한 정보, 할로윈에 하는 것들을 공유하는 사이트입니다.
```

## 🧑🏼‍💻 기간/인원

```
(2021.10.11~ 2021.10.16)
Front-end 3인, Back-end 3인
```

## 🛠 라이브러리 & tool

```
- View (React with JavaScript, React-Router, Styled-components)
- State Management (Redux, Redux-Thunk, Immer, Redux-actions)
- Build Tool (Create React App)
- Code Quality Tool (Prettier)
- Infrastructure (AWS S3 )
- Other Tools (Git, Github, notion, Slack )
```

## 👩🏼‍💻 팀원 및 맡은 기능

- 이미다 (로그인, 회원가입)
- 석지선 (댓글 CRUD)
- 고규식 (게시물 CRUD)

## ⚙️ 구현 기능 (프론트엔드)

1. 로그인 회원가입
2. CRUD
3. 무한스크롤
4. 백엔드와의 통신 (axios)

---

## 📅 진행사항 2021-10-11

1. styled-components 설치.
2. 페이지 나누기.
3. 최소 단위 컴포넌트부터 뷰 만들기.

- Container.js
- Grid.js
- index.js
- Input.js
- Label.js
- Textarea.js
- Upload.js

4. **Node server 와 front 통신완료!!**
5. redux 라이브러리 install

- redux
- react-redux
- redux-thunk
- redux-logger
- history@4.10.1
- connected-react-router@6.8.0
- immer
- redux-actions

6. redux module 만들어 놓기

- user.js
- post.js

7. 스토어 만들기

- configureStore.js

## 📅 진행사항 2021-10-12

1. 백엔드와 Data schema 정리,
2. 최소 단위 컴포넌트 추가 : Image.js,
3. 최소 단위 컴포넌트 수정 : 모든 최소단위 컴포넌트 조금씩 수정
4. Axios 모듈 좀 더 쓰기 편하게 수정!
5. Postlist.js(page) 추가, Post.js(components) 추가, Modal.js(components) 추가,
6. Modal on/off State로 관리!! (Context API로 개선요망!)
7. Axios 사용하여 Posting 완료! (데이터베이스에 제목,게시글,유저닉네임,포스팅시간 올라가는것 확인!)
8. 서버와 클라이언트 회원가입, 로그인 완료! (현재 세션스토리지에 토큰저장됨)
9. addPost 리덕스 연결
10. Spinner 추가!

## 📅 진행사항 2021-10-13

1. 모달을 두개로 분리했다... (글쓰기, 상세컨텐츠 목록)

## ⚙️ 개선해야할 사항

1. 모달 컴포넌트를 하나로 합치고 상태관리

## 🗝 튜터님 정리내용

### 👩🏼‍💻 지선님

1.
2.

### 👩🏼‍💻 미다님

1. 로그인 회원가입일때, 제대로 입력될지 않았을때 버튼 disabled 처리.
2.

### 🧑🏼‍💻 규식

1. 에러메세지(400,401,403,500 등)에 따른 프론트엔드 화면처리.
2. 모달 처리? (상태는 전역으로관리 post.js module)
3.
