const generateObjectString = require("./generateObjectString");
const createStatusCodeBlock = require("./createStatusCodeBlock");

const createChildren = (data) => {
    const requestData = data.request || '';
    const resultData = data.response || '';
    const noteData = data.note || '';
    const statusCodeData = createStatusCodeBlock(data.statusCode);

    return [
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
                            content: generateObjectString.value(requestData)
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
                            content: generateObjectString.value(resultData)
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
                rich_text: statusCodeData
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
    ]
}

module.exports = createChildren;