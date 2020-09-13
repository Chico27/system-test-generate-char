function generateAndDisplay(){
    let repeatingChars = document.getElementById('repeatingCharId').value;
    let charLength = document.getElementById('charLengthId').value;
    // console.log(repeatingChars)
    // console.log(charLength)

    remainLength = charLength;
    repeatingLength = repeatingChars.length;
    displayChar = '';
    while (repeatingLength <= remainLength){
        displayChar += repeatingChars;
        remainLength -= repeatingLength;
    }
    // console.log(remainLength);

    if (remainLength) {
        displayChar += repeatingChars.substring(0, remainLength);
    }

    document.getElementById('generatedChars').innerHTML = displayChar;
}