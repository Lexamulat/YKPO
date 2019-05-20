function compile(str) {
    return calc(str);
}

function calc(str) {
    return eval(str)
}



// let str = '1+(4+9)*-(6+(-1))';
let str='6-1*3';

try {
    console.log("compile", compile(str))
} catch (err) {
    console.log("catch smth", err)
}

