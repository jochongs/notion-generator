const column = require("../config/column");

const createProperty = (data) => {
    const columnNameArray = Object.keys(column);
    const property = {};

    for (const i in columnNameArray) {
        const propertyName = columnNameArray[i];
        const propertyType = column[propertyName].type;
        const propertyKey = column[propertyName].key;

        if (propertyType === 'select') {
            property[propertyName] = !data[propertyKey] ? undefined : {
                select: {
                    name: data[propertyKey]
                }
            }
        } else if (propertyType === 'checkbox') {
            property[propertyName] = {
                type: 'checkbox',
                checkbox: data[propertyKey] || false
            }
        } else if (propertyType === 'title') {
            property[propertyName] = {
                type: 'title',
                title: [
                    {
                        type: 'text',
                        text: {
                            content: data[propertyKey] || ''
                        }
                    }
                ]
            }
        } else if (propertyType === 'rich_text') {
            property[propertyName] = {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: typeof data[propertyKey] === 'string' ? data[propertyKey] : ''
                        }
                    }
                ]
            }
        }
    }

    return property;
}

module.exports = createProperty;