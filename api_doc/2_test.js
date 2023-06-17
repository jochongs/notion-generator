module.exports = [
// GET /test/api ==================================================
{
    done: true,
    method: 'GET',
    entryPoint: '/test/all/hi',
    description: '테스트 데이터 가져오기',
    auth: '사용자',
    request: 
`{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {},
    "query": {},
    "path": {}
}`,
    result:
`{
    "message": null || string,
    "data": [
        {
            "_id": string, // 로그 인덱스
            "ip": string, // 사용자 ip
            "user": "" || string, // 사용자 email
            "method": string, // 요청 method
            "api_path": string, // 경로
            "querystring": null || string, // 요청 query 
            "body": {}, // 요청 body
            "req_time": TIMESTAMP, // 요청 시간 (YYYY-mm-DDThh:mm:ss.sssZ)
            "res_time": TIMESTAMP, // 응답 시간 (YYYY-mm-DDThh:mm:ss.sssZ)
            "status_code": number, // 응답 코드
            "result": string, // 응답 결과
            "err": null || object // api 처리중 발생한 에러 객체
        },
    ],
    ...
}`,
    statusCode: {
        200: 'default',
        400: 'default',
        401: '문제가 있음',
        409: 'default',
        500: 'default'
    },
    noteData: ``
},
// POST /test/api ==================================================
{
    done: false,
    method: 'POST',
    entryPoint: '/test',
    description: '테스트 데이터 생성하기',
    auth: '관리자',
    request: 
`{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {},
    "query": {},
    "path": {}
}`,
    result:
`{
    "message": null || string,
    "data": [
        {
            "_id": string, // 로그 인덱스
            "ip": string, // 사용자 ip
            "user": "" || string, // 사용자 email
            "method": string, // 요청 method
            "api_path": string, // 경로
            "querystring": null || string, // 요청 query 
            "body": {}, // 요청 body
            "req_time": TIMESTAMP, // 요청 시간 (YYYY-mm-DDThh:mm:ss.sssZ)
            "res_time": TIMESTAMP, // 응답 시간 (YYYY-mm-DDThh:mm:ss.sssZ)
            "status_code": number, // 응답 코드
            "result": string, // 응답 결과
            "err": null || object // api 처리중 발생한 에러 객체
        },
    ],
    ...
}`,
    statusCode: {
        200: 'default'
    },
    noteData: ``
},
// PUT /test/api==================================================
{
    done: false,
    method: 'PUT',
    entryPoint: `/test/{test_idx}`,
    description: '테스트 데이터 수정하기',
    auth: '사용자',
    request: 
`{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {
        title: string, // 제목
        contents: string, // 내용
    },
    "query": {},
    "path": {}
}`,
    result:
`{
    "message": null || string,
    "data": [
        {
            "_id": string
        },
    ],
    ...
}`,
    statusCode: {
        200: 'default',
        400: 'default',
        401: '문제가 있음',
        409: 'default',
        500: 'default'
    },
    noteData: ``
},
// DELETE /test/api==================================================
{
    done: false,
    method: 'DELETE',
    entryPoint: `/test/{test_idx}`,
    description: '테스트 데이터 삭제하기',
    auth: '관리자',
    request: 
`{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {},
    "query": {},
    "path": {}
}`,
    result:
`{
    "message": null || string,
    "data": [
        {
            "_id": string, // 로그 인덱스
            "ip": string, // 사용자 ip
            "user": "" || string, // 사용자 email
            "method": string, // 요청 method
            "api_path": string, // 경로
            "querystring": null || string, // 요청 query 
            "body": {}, // 요청 body
            "req_time": TIMESTAMP, // 요청 시간 (YYYY-mm-DDThh:mm:ss.sssZ)
            "res_time": TIMESTAMP, // 응답 시간 (YYYY-mm-DDThh:mm:ss.sssZ)
            "status_code": number, // 응답 코드
            "result": string, // 응답 결과
            "err": null || object // api 처리중 발생한 에러 객체
        },
    ],
    ...
}`,
    statusCode: {
        200: 'default',
        400: 'default',
        401: '문제가 있음',
        409: 'default',
        500: 'default'
    },
    noteData: ``
},
]