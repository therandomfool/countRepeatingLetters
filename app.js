//  string will not contain numbers or symbols  only letters

function countLetters(str) {
    let tempArray = str.split('');
    let letters = [];
    let count = 1;

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] === tempArray[i + 1]) {
            count++
        } else {
            let value = `${count}${tempArray[i]}`;
            letters = [...letters, value];
            count = 1;
        }
    }
    return letters.join("");
}

console.log(countLetters('ffffeerttttoooggggzzzzzzzz'));