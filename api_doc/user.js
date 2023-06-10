module.exports = [
// GET /user
{
    done: false,
    method: 'GET',
    entryPoint: '/user',
    description: '사용자 정보 가져오기',
    auth: '관리자',
    request: /*sql*/ 
`{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {},
    "query": {
        order: number, // 정렬 방법
    },
    "path": {}
}`,
    result: /*sql*/
`{
	"message": null || string
	"data": {
		"email": string, // 사용자 이메일
		"userName": string, // 사용자 이름
		"userType": string, // 1:학생, 2:조교, 3:교수, 4:기업
		"profileImg": string, // img.src에 넣을 프로필 이미지 full url
		"admin": boolean, // 관리자 여부  true:관리자, false:일반유저

		//기업 사용자일 경우 다음 데이터가 추가됨
		"affiliation": string, // 소속
		"evidence": string,// img.src에 넣을 소속 증빙 이미지 full url

		//학생,조교,교수일 경우 다음 데이터가 추가됨
		"userNumber": string, // 학번 또는 교수번호
		"phoneNumber": string, // 핸드폰 번호 11글자 ex)01012341234
		"departmentArray": [string, ...] // 속한 과 이름 배열
	}
}`,
    statusCode: {
        200: 'default',
        400: 'default',
        401: 'order에 문제가 있음',
        409: 'default',
        500: 'default'
    },
    noteData: ``
},
// POST /user/api
{
    done: false,
    method: 'POST',
    entryPoint: '/user',
    description: '회원가입 하기',
    auth: '관리자',
    request: /*sql*/ 
`{
	"headers": {
		"Content-Type": "multipart/form-data"
	},
	"body": {
		"userType": int, // 1: 학생, 2: 조교, 3: 교수, 4: 기업
		"email": string, // 사용자 이메일
		"name": string, // 사용자 이름
		"pw": string // 비밀번호 
		"profileImg": undefined || file, // 프로필 이미지
		
		// 학생, 조교, 교수
		"studentNumber": string, // 학생 학번
		"phoneNumber": string, // 학생 연락처 01012341234 (- 없이)
		"departmentArray": [] || [number, ...], // 학과 인덱스 배열
	
		// 기업
		"affilication": string, // 소속
		"evidence": file, // 증빙자료 (jpg, png, jpeg)
	},
	"query": {},
	"path": {}
}`,
    result: /*sql*/
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
            "result": string, // 응답 결과 /*sql*/
            "err": null || object // api 처리중 발생한 에러 객체
        },
    ],
    ...
}`,
    statusCode: {
        200: 'default',
        400: 'default',
        500: 'default'
    },
    noteData: ``
},
// PUT /user/api
{
    done: false,
    method: 'PUT',
    entryPoint: '/user',
    description: '회원 데이터 수정하기',
    auth: '사용자',
    request: /*sql*/ 
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
    result: /*sql*/
`{
    "message": null || string,
    "data": {}
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
// DELETE /user
{
    done: false,
    method: 'DELETE',
    entryPoint: '/user/{email}',
    description: '유저 삭제하기',
    auth: '관리자',
    request: /*sql*/ 
`{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {},
    "query": {
        email: string, // 삭제할 사용자 이메일
    },
    "path": {}
}`,
    result: /*sql*/
`{
    "message": null || string,
    "data": {},
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