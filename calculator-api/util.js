const calculator ={
    add: (val1, val2) => (val1 != undefined && val2 != undefined) ? val1 + val2 : 0,
    subtract: (val1, val2) => (val1 != undefined && val2 != undefined) ? val1 - val2 : 0,
    multiply: (val1, val2) => (val1 != undefined && val2 != undefined) ? val1 * val2 : 0,
}

export default calculator;