const { notionDbId } = require("../config/setting");
const createChildren = require("./createChildren");
const createProperty = require("./createProperty");
const notion = require("./notion");

const addNotionData = (data) => {
    return new Promise(async (resolve ,reject) => {
        const method = data.method || '';
        const entryPoint = data.entryPoint || '';
        const property = createProperty(data);
        const children = createChildren(data);

        try{
            const response = await notion.pages.create({
                parent: {
                    database_id: notionDbId
                },
                children: method === '' ? undefined : children,
                properties: property
            });
            
            resolve(response);
        }catch(err){
            reject(err);
        }
    })
}

module.exports = addNotionData;