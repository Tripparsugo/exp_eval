console.log("hellow@@@@@@")


let variables = [];
variables[0] = [{words:["hello", "there", "general", "kenobi"], correct:true}, {words:["hellow", "there", "general", "kenobi"], correct:false}];
variables[1] =  [{words:["hello", "world"], correct:true}, {words:["hellowwwww", "world"], correct:false}];







const entrypoint = "entrypoint";


getResults(variables).then((res)=>console.log(res));



async function getResults(variables) {
    const testResult1 =  await runtTest1(variables);
    const formResults =null;
    showEnd();

    return {formResults:formResults, testResult1:testResult1}
}




function showEnd(){
    document.body.innerText = "Thanks for attending this test";
}


async function runtTest1(variables){
    const res = [];
    for (let v of variables) {
        const app = new App(v, entrypoint, toCamel);
        await app.showAnswer();
         res.push(await app.start());
    }
    return res;
}




function showWords(words) {
   document.body.innerText =`find  ${words.join(" ")}`;
   sleep(2000);
}


function toCamel(words) {
    return words.map(w => w.charAt(0).toUpperCase() + w.substr(1, w.length)).join("");
}

function toKebab(words) {
    words.join("-");
}

