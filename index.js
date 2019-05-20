const openSymb = '(';
const closeSymb = ')';


function simple() {
    return 'sml21'
}

function compile(str) {
    while (~str.toString().indexOf(openSymb)) {
        str = parse(str);
    }
    return calc(str);
}

function parse(str) {
    if (~(str.toString().indexOf(openSymb))) {
        let obj = separateBlock(str);
        let curr = `${obj.str1}${parse(obj.block)}${obj.str2}`;
        console.log(curr);
        return calc(curr);
    }
    return calc(str);

}

function separateBlock(str) {

    let openCounter = 0;
    let closeCounter = 0;
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] == openSymb) {
            openCounter++;
        }
        else if (str[i] == closeSymb) {
            closeCounter++;
        }

        if ((openCounter) && (openCounter == closeCounter)) {
            let blockStart = str.indexOf(openSymb);
            let blockEnd = i;
            obj.str1 = str.substring(0, blockStart);
            obj.block = str.substring(blockStart + 1, blockEnd);
            obj.str2 = str.substring(blockEnd + 1);
            return obj;
        }
    }

}

function calc(str) {
    return eval(str)
}


module.exports = {
    simple,
    compile
}