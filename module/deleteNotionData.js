const { notionDbId } = require("../config/setting");
const notion = require("./notion");

const deleteNotionData = async () => {
    return new Promise(async (resolve, reject) => {
        let next_cursor = undefined;
        const resultArray = [];

        try {
            while (true) {
                try {
                    const response = await notion.databases.query({ database_id: notionDbId, start_cursor: next_cursor });

                    resultArray.push(...response.results)

                    if (!response.has_more) {
                        break;
                    }

                    next_cursor = response.next_cursor;
                } catch (err) {
                    reject(err);
                    return;
                }
            }

            resultArray.forEach(async (result) => {
                await notion.pages.update({ page_id: result.id, archived: true });
            });

            resolve(1);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = deleteNotionData;