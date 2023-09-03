const columnCheck = require("./module/columnCheck");
const deleteNotionData = require("./module/deleteNotionData");
const addNotionPage = require("./module/addNotionPage");
const fs = require('fs');
const { apiDocFilePath, apiBlank } = require("./config/setting");
const ora = require('ora');
const path = require("path");
const jsonRefCheck = require("./module/checkRefJson");
require('dotenv').config();

const main = async () => {
    const spinner = ora('').start();
    try {
        // 노션 데이터베이스 컬럼 정보 확인
        spinner.text = 'Loading Database Column Check';
        await columnCheck();

        // 데이터베이스 페이지 모두 삭제
        spinner.text = 'Loading Delete All Database pages\n';
        await deleteNotionData();

        spinner.text = 'Loading Read API JS\n';
        const docFilePath = path.resolve(__dirname, '..', '..', apiDocFilePath);
        let fileArray;
        try {
            fileArray = fs.readdirSync(docFilePath);
        } catch (err) {
            spinner.stop();
            return console.log(`${docFilePath} 디렉토리가 존재하지 않습니다.`);
        }

        const apiDocArray = [];
        for (const fileName of fileArray) {
            if (fileName.split('.')[1] === 'json') {
                const apiArray = jsonRefCheck(require(path.join(docFilePath, fileName)), path.join(docFilePath, 'components'));
                if (Array.isArray(apiArray)) {
                    apiDocArray.push(...apiArray);

                    // 공백 추가
                    if (apiBlank) {
                        apiDocArray.push({});
                    }
                }
            }
        }

        if (apiBlank) { // 마지막 공백 제거
            apiDocArray.pop(0, -1);
        }

        // 데이터베이스 페이지 추가
        try {
            for (const i in apiDocArray) {
                spinner.text = `Insert Notion Page ${parseInt(i) + 1}/${apiDocArray.length}`;
                const apiDoc = apiDocArray[i];
                await addNotionPage(apiDoc);
            }
            spinner.stop();
            console.log('All Success');
        } catch (err) {
            spinner.stop();
            console.log(err);
        }
    } catch (err) {
        if (err.code === 'object_not_found') {
            return console.log(err.message);
        }

        console.log(err);
    }
}

main();
