function say(word){
    console.log(word);
    return word;
}

// Passing Functions Around 
function execute(someFunction, val){
    return someFunction(val);
}

module.exports = {
    exec_func : execute,
    say_func : say
}