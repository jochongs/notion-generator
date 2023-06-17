const column = require("../config/column");
const { notionDbId } = require("../config/setting");
const notion = require("./notion");

const columnCheck = async () => { 
    return new Promise(async (resolve, reject) => {
        const response = await notion.databases.retrieve({ database_id : notionDbId });

        const notionPorpertyArray = Object.keys(response.properties);
        const columnNameArray = Object.keys(column);

        try{
            // Column 개수 체크
            if(notionPorpertyArray.length !== columnNameArray.length){
                return reject('데이터베이스 컬럼 개수가 일치하지 않습니다.');
            }

            // Column 이름, 타입 체크
            for(const notionProperty of notionPorpertyArray){
                const notionPropertyType = response.properties[notionProperty].type;
                
                if(column[notionProperty].type !== notionPropertyType){
                    console.log(notionProperty, notionPropertyType);
                    return reject('데이터베이스의 컬럼 정보가 일치하지 않습니다.');
                }
            }

            resolve(1);
        }catch(err){
            reject(err);
        }
    });
}

module.exports = columnCheck;