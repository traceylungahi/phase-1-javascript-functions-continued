function saturdayFun(haveFun = "roller-skate") {
    return (`This Saturday, I want to ${haveFun}!`);
}
function mondayWork(go = "go to the office") {
    return (`This Monday, I will ${go}.`);
};
function wrapAdjective(star = "*") {
    return (adj = "special") => {
        return `You are ${star}${adj}${star}!`
    }
}