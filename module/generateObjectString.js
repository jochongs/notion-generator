const generateTypeObject = (data, tabCount = 0) => {
    if (data === undefined) {
        return 'undefined';
    }

    if (data === null) {
        return 'null';
    }

    if (typeof data !== 'object') {
        return data;
    }

    const keys = Object.keys(data);
    tabCount += 1;
    let jsonString = `{`
    for (const i in keys) {
        if (Array.isArray(data[keys[i]])) {
            // 배열일 경우
            if (Object.keys(data[keys[i]]).length === 0) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${generateTypeObject(data[keys[i]][0], tabCount)}[],`;
                continue;
            }

            if (typeof data[keys[i]][0] !== 'object') {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${typeof data[keys[i]][0]}[],`;
                continue;
            }

            jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${generateTypeObject(data[keys[i]][0], tabCount)}[],`;
            continue;
        }

        if (typeof data[keys[i]] === 'object') {
            // 오브젝트인 경우
            if (data[keys[i]] === undefined) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": undefined`;
                continue;
            }

            if (data[keys[i]] === null) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": null`;
                continue;
            }

            if (Object.keys(data[keys[i]]).length === 0) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": {}`;
                continue;
            }

            jsonString = returnTab(tabCount - 1) + jsonString;
            jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${generateTypeObject(data[keys[i]], tabCount)}`;

            continue;
        }

        jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${typeof data[keys[i]]},`;
    }

    jsonString += `\n${returnTab(tabCount - 1)}}`;
    return jsonString;
}

const generateObjectString = (data, tabCount = 0) => {
    if (data === undefined) {
        return 'undefined';
    }

    if (data === null) {
        return 'null';
    }

    if (typeof data !== 'object') {
        return data;
    }

    const keys = Object.keys(data);
    tabCount += 1;
    let jsonString = `{`
    for (const i in keys) {
        if (Array.isArray(data[keys[i]])) {
            // 배열일 경우
            if (Object.keys(data[keys[i]]).length === 0) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${generateObjectString(data[keys[i]][0], tabCount)}[],`;
                continue;
            }

            if (typeof data[keys[i]][0] !== 'object') {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${typeof data[keys[i]][0]}[],`;
                continue;
            }

            jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${generateObjectString(data[keys[i]][0], tabCount)}[],`;
            continue;
        }

        if (typeof data[keys[i]] === 'object') {
            // 오브젝트인 경우
            if (data[keys[i]] === undefined) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": undefined`;
                continue;
            }

            if (data[keys[i]] === null) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": null`;
                continue;
            }

            if (Object.keys(data[keys[i]]).length === 0) {
                jsonString += `\n${returnTab(tabCount)}"${keys[i]}": {}`;
                continue;
            }

            jsonString = returnTab(tabCount - 1) + jsonString;
            jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${generateObjectString(data[keys[i]], tabCount)}`;

            continue;
        }

        jsonString += `\n${returnTab(tabCount)}"${keys[i]}": ${data[keys[i]]},`;
    }

    jsonString += `\n${returnTab(tabCount - 1)}}`;
    return jsonString;
}

const returnTab = (size = 0) => {
    let returnTabString = '';

    for (let i = 0; i < size; i++) {
        returnTabString += '\t';
    }

    return returnTabString;
}

module.exports = {
    type: generateTypeObject,
    value: generateObjectString
}
