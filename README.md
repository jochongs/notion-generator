# 💻 **Notion API 명세서 자동 생성기**

## :key: **목표**
API 명세서를 매번 Notion에 들어가서 고치기가 힘들었다. 
폴더 하나에 명세서 관련한 내용을 js로 적고 한 번에 Notion에 옮겨지도록 해보자.


<br/>

## 🔧 **사용 기술**
* nodejs
* Notion API

<br/>

## :open_file_folder: **폴더 구조**
```bash
├── config
│   ├── column.js
│   └── setting.js
├── module
│   ├── addNotionData.js 
│   ├── createChildren.js
│   ├── createProperty.js
│   ├── createStatusCodeBlock.js
│   ├── deleteNotionData.js
│   └── notion.js
├── .env
└── main.js
```
<br/>

## :eyes: **사용 방법**
### 1) 노션 API KEY, DATABASE ID가져오기
* 아래 공식 문서에 나온 방법대로 API key와 DB id를 가져온다.
* https://developers.notion.com/docs/create-a-notion-integration

### 2) .env_template 수정하기
* .env_template 파일 이름을 .env로 수정한다.
* .env에 API key와 DB id를 입력한다.

### 3) 노션 데이터베이스 컬럼 정하기
* 노션에서 데이터베이스의 컬럼을 추가하고 추가한 컬림의 이름과 타입을을 ./config/column.js에 적는다.
<br/>`select`, `checkbox`, `text`, `rich_text` 타입만을 지원합니다.

### 4) 삽입할 데이터 작성하기
* .env에 API_DOC_FILE_PATH아래에 js파일로 문서를 작성한다.

### 5) npm run api
* 명령어로 실행한다.

> 요약 : .env 수정, column.js 수정, npm run api<br/>

<br/>

## :paperclip: 환경변수 설명
1. API_DOC_FILE_PATH : api 문서를 작성할 디렉토리를 main.js를 기준으로 상대 경로로 작성
2. API_BLACK : 각 파일에서 읽은 api 문서 배열 사이에 공백 페이지를 넣을지 설정
3. DEFAULT_MESSAGE : 상태코드의 기본 문구를 삽입할 공간

<br/>

## :ledger: API 문서 작성 규칙
1. API 문서에 들어갈 내용의 key값들은 반드시 column에 작성되어있어야 함 (페이지 내용은 정해져 있음)
2. 페이지 내용을 변경할 경우 ./module/createChildren.js파일의 코드를 수정해야함

<br/>

## 💡 **사용**
![문서 자동화](https://github.com/Stageus/shoot-backend/assets/54374610/e7884663-f55d-427a-808a-c5e8f8414da4)


<br/>
<br/>

## 참고
* https://developers.notion.com/reference