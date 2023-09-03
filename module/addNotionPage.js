const { notionDbId } = require("../config/setting");
const createChildren = require("./createChildren");
const createProperty = require("./createProperty");
const notion = require("./notion");

const addNotionPage = (data) => {
    return new Promise(async (resolve, reject) => {
        const property = createProperty(data);
        const children = createChildren(data);

        try {
            const response = await notion.pages.create({
                parent: {
                    database_id: notionDbId
                },
                children: Object.keys(data).length === 0 ? undefined : children,
                properties: property
            });

            resolve(response);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = addNotionPage;
