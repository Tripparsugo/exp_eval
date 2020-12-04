console.log("hellow@@@@@@")


let variables = [];
variables[0] = ["hello", "there"];


let c;
let results;

const entrypoint = "entrypoint";





new App(variables[0], entrypoint)
    .start().then(e => console.log(e));



async function getResults() {
    for(let v in variables){
       results[c] =  await new App(v, entrypoint, toCamel).start();
       c++;
    }

    //fetch
}


function toCamel(words){
    return words.map(w=>w.charAt(0).toUpperCase() + w.substr(1,w.length)).join("");
}

function toKebab(words){
    words.join("-");
}