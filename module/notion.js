const { notionApiKey, notionDbId } = require('../config/setting');
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: notionApiKey });

module.exports = notion;