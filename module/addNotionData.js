const { notionDbId } = require("../config/setting");
const notion = require("./notion");

const defaultMessage = {
    200: '정상',
    400: '프론트에서 온 데이터 문제',
    401: '토큰이 만료되었거나 토큰이 없음',
    403: '로그인 인증은 확인되었으나 권한이 없음',
    409: '서버에서 확인된 에러의 기타 예외처리',
    500: '서버에서 놓친 심각한 문제 ( 절대 뜨면 안 됨 )'
}

const addNotionData = async (data) => {
    //prepare data
    const done = data.done || false;
    const method = data.method || '';
    const entryPoint = data.entryPoint || '';
    const description = data.description  || '';
    const auth = data.auth || '';
    const requestData = data.request || '';
    const resultData = data.result || '';
    const statusCodeData = data.statusCode || {};
    const noteData = '';

    //prepare status code json format
    const statusCodeArray = Object.keys(statusCodeData);
    const insertStatusCode = [];
    let i = 0;
    for(const statusCode of statusCodeArray){
        i++;
        let color = '';
        if(statusCode[0] == 2){
            color = 'blue';
        }else if(statusCode[0] == 3 || statusCode[0] == 4){
            color = 'yellow';
        }else{
            color = 'red';
        }

        insertStatusCode.push(
            {
                type: 'text',
                text: {
                    content: statusCode + ''
                },
                annotations: !color ? undefined : { color: color }
            }
        );

        insertStatusCode.push(
            {
                type: 'text',
                text: {
                    content: ' - ' + (statusCodeData[statusCode] === 'default' ? defaultMessage[statusCode] : statusCodeData[statusCode]) + (statusCodeArray.length === i ? '' : '\n')
                }
            }
        );
    }

    try{
        const response = await notion.pages.create({
            parent: {
                database_id: notionDbId
            },
            children: method === '' ? undefined : [
                {
                    object: 'block',
                    heading_2: {
                        rich_text: [
                            {
                                text: {
                                    content: 'Request'
                                }
                            }
                        ],
                        color: 'blue'
                    }
                },
                {
                    object: 'block',
                    code: {
                        language: 'javascript',
                        rich_text: [
                            {
                                type: 'text',
                                text: {
                                    content: requestData
                                }
                            }
                        ]
                    }
                },
                {
                    object: 'block',
                    heading_2: {
                        rich_text: [
                            {
                                text: {
                                    content: 'Response'
                                }
                            }
                        ],
                        color: 'blue'
                    }
                },
                {
                    object: 'block',
                    code: {
                        language: 'javascript',
                        rich_text: [
                            {
                                type: 'text',
                                text: {
                                    content: resultData
                                }
                            }
                        ]
                    }
                },
                {
                    object: 'block',
                    heading_2: {
                        rich_text: [
                            {
                                text: {
                                    content: 'Status Code'
                                }
                            }
                        ],
                        color: 'blue'
                    }
                },
                {
                    object: 'block',
                    code: {
                        language: 'plain text',
                        rich_text: insertStatusCode
                    }
                },
                {
                    object: 'block',
                    heading_2: {
                        rich_text: [
                            {
                                text: {
                                    content: 'Note'
                                }
                            }
                        ],
                        color: 'blue'
                    }
                },
                {
                    object: 'block',
                    code: {
                        language: 'plain text',
                        rich_text: [
                            {
                                type: 'text',
                                text: {
                                    content: noteData
                                }
                            }
                        ]
                    }
                }
            ],
            properties: {
                "Done": {
                    type: 'checkbox',
                    checkbox: done
                },
                "Method": !method ? undefined : {
                    select: {
                        name: method.toUpperCase()
                    }
                },
                "Entry Point": {
                    type: 'title',
                    title: [
                        {
                            type: 'text',
                            text: {
                                content: entryPoint
                            }
                        }
                    ]
                },
                "Description": {
                    type: 'rich_text',
                    rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: description
                            }
                        }
                    ]
                },
                "Auth": !method ? undefined : {
                    type: 'select',
                    select: {
                        name: auth
                    }
                }
            }
        });

        console.log(`${method} ${entryPoint} 저장`);
    }catch(err){
        console.log(`${method} ${entryPoint}를 저장하다가 실패하였습니다.`);
        console.log(err);
    }
}

module.exports = addNotionData;