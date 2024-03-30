export const writeInJson = (data) => {
    const fs = require('fs');
    fs.writeFileSync('../data/quizes.json', JSON.stringify(data))

}