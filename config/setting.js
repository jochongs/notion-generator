require('dotenv').config();

module.exports = {
    notionApiKey: process.env.NOTION_API_KEY,
    notionDbId: process.env.NOTION_DATABASE_ID
}