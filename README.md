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
│   ├── addNotionPage.js 
│   ├── checkRefJson.js
│   ├── columnCheck.js
│   ├── createChildren.js
│   ├── createProperty.js
│   ├── createStatusCodeBlock.js
│   ├── deleteNotionData.js
│   ├── docSample.json
│   ├── generateObjectString.js
│   └── notion.js
├── .env.example
├── .bin
├── package.json
└── main.js
```
<br/>

## :eyes: **사용 방법**
### 1) 패키지 설치
`npm install https://github.com/jochongs/notion-generator`

### 2) 패키지 실행
`npx notion`
* 위 명령어로 .env 파일이 생성된다.

### 3) 노션 API KEY, DATABASE ID가져오기
* 아래 공식 문서에 나온 방법대로 API key와 DB ID를 가져와 환경변수에 넣어준다..
* 주의) DB와 API key를 연결해야하고 DB Column정보가 기존 스타일과 일치해야한다.
* https://developers.notion.com/docs/create-a-notion-integration
> 문서가 들어갈 디렉토리 이름은 반드시 이 단계에서 설정해야합니다.

### 4) 패키지를 한 번 더 실행
`npx notion`
* 문서 디렉토리 위치에 샘플 json파일이 생기고 한 번 더 실행할 경우 Notion에 페이지가 작성된다
* 주의) .env 파일에 Notion api key가 이미 있고 document Directory가 이미 있는 경우에 2번과 4번 과정 없이 실행됩니다.

<br/>

## :paperclip: 환경변수 설명
1. API_DOC_FILE_PATH : api 문서를 작성할 디렉토리를 main.js를 기준으로 상대 경로로 작성
2. API_BLACK : 각 파일에서 읽은 api 문서 배열 사이에 공백 페이지를 넣을지 설정
3. DEFAULT_MESSAGE : 상태코드의 기본 문구를 삽입할 공간

<br/>

## :ledger: API 문서 작성 규칙
1. API 문서에 들어갈 내용의 key값들은 반드시 Column에 작성되어있어야 함 (페이지 내용은 정해져 있음)
2. 페이지 내용을 변경할 경우 ./module/createChildren.js파일의 코드를 수정해야함

<br/>

## 💡 **사용**
![notion_generator](https://github.com/jochongs/notion_auto_generator/assets/54374610/0a0d648d-a4c4-4974-b53e-0e43286b88b2)


<br/>
<br/>

## 참고
* https://developers.notion.com/reference