const path = require("path");

const jsonRefCheck = (json, docFilePath) => {
    if (json === null) {
        return json;
    }

    if (json === undefined) {
        return json;
    }

    if (typeof json === 'string') {
        if (json[0] == '$') {
            try {
                const requireData = require(path.join(docFilePath, json.slice(1)));
                json = requireData || json;
            } catch (err) {
                json = `Can't find [${json.slice(1)}.json]`
            }
        }

        return json;
    }
    if (Array.isArray(json)) {
        for (const i in json) {
            json[i] = jsonRefCheck(json[i], docFilePath);
        }

        return json;
    }

    if (typeof json === 'object') {
        const keys = Object.keys(json);

        for (const i in keys) {
            json[keys[i]] = jsonRefCheck(json[keys[i]], docFilePath);
        }

        return json;
    }

    return json;
}

module.exports = jsonRefCheck;
