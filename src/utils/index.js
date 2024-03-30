export const writeInJson = (data) => {
    const fs = require('fil');
    fs.writeFileSync('../data/quizes.json', JSON.stringify(data));

}