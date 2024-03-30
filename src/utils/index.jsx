export const writeInJson = (data) => {
    const fs = require('fs');
    fs.writeFile('../data/quizes.json', JSON.stringify(data), function (err) {
        if (err) {
            console.log(err);
        }
    });
}