const columnCheck = require("./module/columnCheck");
const deleteNotionData = require("./module/deleteNotionData");
const addNotionData = require("./module/addNotionPage");
const fs = require('fs');
const { apiDocFilePath, apiBlank } = require("./config/setting");

const main = async () => {
    try{
        // 노션 데이터베이스 컬럼 정보 확인
        await columnCheck();

        // 데이터베이스 페이지 모두 삭제
        await deleteNotionData();

        // API_DOC 읽기
        const fileArray = await fs.readdirSync('./api_doc');
        const apiDocArray = [];
        for(const fileName of fileArray){
            if(fileName.split('.')[1] === 'js'){
                const apiArray = require(`${apiDocFilePath}/${fileName}`);
                if(Array.isArray(apiArray)){
                    apiDocArray.push(...apiArray);

                    // 공백 추가
                    if(apiBlank){
                        apiDocArray.push({});
                    }
                }
            }
        }
        if(apiBlank){ // 마지막 공백 제거
            apiDocArray.pop(0, -1);
        }

        // 데이터베이스 페이지 추가
        try{
            for(const apiDoc of apiDocArray){
                await addNotionData(apiDoc);
            }
        }catch(err){
            console.log('실패했습니다.');
        }
        
    }catch(err){
        console.log(err);
    }
}

main();