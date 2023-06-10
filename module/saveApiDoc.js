const addNotionData = require("./addNotionData");
const deleteNotionData = require("./deleteNotionData");

const saveApiDoc = async (saveApiDocArray, option = 'slow') => {
    return new Promise(async (resolve, reject) => {
        try{
            await deleteNotionData();
        }catch(err){
            console.log('데이터베이스 내용을 초기화하는데 실패했습니다.');

            reject(err);
            return;
        }

        console.log('======== 데이터베이스 삭제가 끝났습니다. 데이터를 추가합니다. =========');

        if(option === 'fast'){
            try{
                for(const saveApiDoc of saveApiDocArray){
                    addNotionData(saveApiDoc);
                }
            }catch(err){
                console.log('데이터 삽입 도중 실패했습니다.');
    
                reject(err);
                return;
            }
        }else{
            try{
                for(const saveApiDoc of saveApiDocArray){
                    await addNotionData(saveApiDoc);
                }
            }catch(err){
                console.log('데이터 삽입 도중 실패했습니다.');
    
                reject(err);
                return;
            }
        }

        resolve(1);
    });
}

module.exports = saveApiDoc;