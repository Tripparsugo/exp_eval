console.log("hellow@@@@@@")


let variables = [];
variables[0] = [{words:["hello", "there", "general", "kenobi"], correct:true}, {words:["hellow", "there", "general", "kenobi"], correct:false}];
variables[1] =  [{words:["hello", "world"], correct:true}, {words:["hellowwwww", "world"], correct:false}];







const entrypoint = "entrypoint";


getResults(variables).then((res)=>console.log(res));

// new App(variables[0], entrypoint, toCamel)
//     .start()
//     .then(
//         data => {
//             const i =1;
//             console.log(data)
//
//         }
//     );


async function getResults(variables) {
    const res = [];
    for (let v of variables) {
        res.push( await new App(v, entrypoint, toCamel).start());
    }
    return res;
}


function toCamel(words) {
    return words.map(w => w.charAt(0).toUpperCase() + w.substr(1, w.length)).join("");
}

function toKebab(words) {
    words.join("-");
}