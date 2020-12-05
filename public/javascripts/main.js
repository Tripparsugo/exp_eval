console.log("hellow@@@@@@")


let variables = [];
variables[0] = [{words:["hello", "there", "general", "kenobi"], correct:true}, {words:["hellow", "there", "general", "kenobi"], correct:false}];
variables[1] =  [{words:["hello", "world"], correct:true}, {words:["hellowwwww", "world"], correct:false}];
variables[2] = [{words:["fresh", "freshwater", "fish"], correct:true},
    {words:["fresh", "friedwater", "fish"], correct:false},
    {words:["free ", "freshwater", "fish"], correct:false},
    {words:["fresh", "frenzywater", "fish"], correct:false},
]

variables[3] = [{words:["tropical", "cat"], correct:true},
    {words:["tripping", "cat"], correct:false},
    {words:["tropical", "cut"], correct:false},
    {words:["typical", "cat"], correct:false},
]

variables[4] = [{words:["data", "value"], correct:true},
    {words:["data", "varied"], correct:false},
    {words:["date", "value"], correct:false},
    {words:["data", "vale"], correct:false},
]

variables[5] = [{words:["file", "name"], correct:true},
    {words:["first", "name"], correct:false},
    {words:["file", "numb"], correct:false},
    {words:["filet", "name"], correct:false},
]

variables[6] = [{words:["internal", "frameInternal", "frame", "title", "pane",
        "internal", "frame", "title", "panel", "Maximize",
        "button", "window", "not", "focused", "state"], correct:true},
    {words:["internal", "frameInternal", "frame", "title", "pane",
            "intestinal", "frame", "title", "panel", "Maximize",
            "button", "window", "not", "focused", "state"], correct:false},
    {words:["internal", "frameInternal", "frame", "title", "pane",
            "internal", "frame" ,"title", "panel", "Maximize",
            "buttocks", "window", "not", "focused", "state"], correct:false},
    {words:["internal", "frameInternal", "frame", "tilted", "pane",
            "internal", "frame", "title", "panel", "Maximize",
            "buttons", "window", "not", "focused", "state"], correct:false},
]






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