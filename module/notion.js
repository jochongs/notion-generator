const { Client } = require('@notionhq/client');
const { notionApiKey, notionDbId } = require('../config/setting');
const notion = new Client({ auth: notionApiKey });

module.exports = notion;