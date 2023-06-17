require('dotenv').config();

module.exports = {
    // 필수 값
    notionApiKey: process.env.NOTION_API_KEY,
    notionDbId: process.env.NOTION_DATABASE_ID,

    // 상태코드 기본 메세지
    defaultMessage200: process.envDEFAULT_MESSAGE_200 || '정상',
    defaultMessage400: process.envDEFAULT_MESSAGE_400 || '프론트에서 온 데이터 문제',
    defaultMessage401: process.envDEFAULT_MESSAGE_401 || '토큰이 만료되었거나 토큰이 없음',
    defaultMessage403: process.envDEFAULT_MESSAGE_403 || '로그인 인증은 확인되었으나 권한이 없음',
    defaultMessage409: process.envDEFAULT_MESSAGE_409 || '서버에서 확인된 에러의 기타 예외처리',
    defaultMessage500: process.envDEFAULT_MESSAGE_500 || '서버에서 놓친 심각한 문제 ( 절대 뜨면 안 됨 )',

    // 옵션
    apiDocFilePath: process.env.API_DOC_FILE_PATH || './api_doc',
    apiBlank: process.env.API_BLANK || true
}