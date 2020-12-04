console.log("hellow")


variables = ['a', 'b'];
c;
results;

const entrypoint = "entrypoint";

new App({}, entrypoint).start();



async function getResults() {
    for(let v in variables){
       results[c] =  await new App(v, entrypoint).start();
       c++;
    }

    //fetch
}


function createTest(e) {
    results[c++] = e.toJSON();
    if(c >=  variables.length){
        //do a fetch
    } else {
        new App(variables[c], entrypoint).start();

    }

    function toCamel(words){
        return words.map(w=>w.charAt(0).toUpperCase() + w.substr(1,w.length)).join("");
    }

    function toKebab(words){
        words.join("-");
    }


}