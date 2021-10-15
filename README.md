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

### 클라이언트쪽

1. 모달을 두개로 분리했다... (글쓰기, 상세컨텐츠 목록)
2. 로그인 안했을때는 글 등록 버튼을 안보이게 해줌.
3. 로그인 유저에 해당하는 게시물에만 수정,삭제 보여줌.
4. Redux module (post.js, user.js,) 그리고 axios.js url 공통화 작업.

### 백엔드와의 통신

1. `apis.get('post/postlist')` 요청하여 Postlist.js 컴포넌트에 post_list 조회시키기 완료!
2.

## ⚙️ 개선해야할 사항

1. 모달 컴포넌트를 하나로 합치고 전역 상태관리
2.

---

## 📅 진행사항 2021-10-14

### 클라이언트쪽

1. 각각의 카드 게시물 Update 및 Delete 서버와 통신하여 데이터베이스에 Update 및 Delete
2. 각각의 카드 게시물 Update 및 Delete 리덕스로 상태 바로 업데이트.
3. 기존 Session storage에 저장되어있던, userNickname을 지우고 페이지가 새로고침 될때 서버에 요청을 보내어

## 📅 진행사항 2021-10-15

### 클라이언트쪽

1. 파이어 베이스 연동, 파이어 스토리지 연동 및 이미지 업로드하여 파이어 스토리지에 저장되는 것 확인!
2. image url을 Upload.js에서만 가지고 있기 때문에 리덕스로 올린 이미지 url 관리
3. 저장된 image url을 Modal.js에서 useSelector로 불러온다음 다른 post정보들과 함께 전송!
4. .env 파일 생성!
