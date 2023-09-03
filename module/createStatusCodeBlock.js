const { defaultMessage200, defaultMessage400, defaultMessage401, defaultMessage403, defaultMessage409, defaultMessage500 } = require("../config/setting");

const createStatusCodeBlock = (statusCodeData) => {
    if (typeof statusCodeData !== Object) {
        statusCodeData = {
            "200": "default",
            "400": "default",
            "401": "default",
            "403": "default",
            "409": "default",
            "500": "default"
        };
    }

    const statusCodeArray = Object.keys(statusCodeData);
    const insertStatusCode = [];
    let i = 0; // 마지막 개행 삭제를 위한 index

    //기본 메세지 설정
    const defaultMessage = {
        200: defaultMessage200,
        400: defaultMessage400,
        401: defaultMessage401,
        403: defaultMessage403,
        409: defaultMessage409,
        500: defaultMessage500
    }

    for (const statusCode of statusCodeArray) {
        i++;

        //색 설정
        let color = '';
        if (statusCode[0] == 2) {
            color = 'blue';
        } else if (statusCode[0] == 3 || statusCode[0] == 4) {
            color = 'yellow';
        } else {
            color = 'red';
        }

        // 상태코드 생성 ( + 색깔 )
        insertStatusCode.push(
            {
                type: 'text',
                text: {
                    content: statusCode + ''
                },
                annotations: !color ? undefined : { color: color }
            }
        );

        // 상태코드 메세지 생성
        insertStatusCode.push(
            {
                type: 'text',
                text: {
                    content: ' - '
                        + (statusCodeData[statusCode] === 'default' ? defaultMessage[statusCode] : statusCodeData[statusCode])
                        + (statusCodeArray.length === i ? '' : '\n')
                }
            }
        );
    }

    return insertStatusCode;
}

module.exports = createStatusCodeBlock;