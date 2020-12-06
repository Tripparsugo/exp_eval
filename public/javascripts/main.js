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

let user_id;
let register_form = document.querySelector("form")
register_form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let body = new FormData(register_form);
    fetch("/app/", {method:"POST", body})
        .then(res=>res.json())
        .then(obj => {
            user_id = obj;
            event.target.style.display = "none";
        });
})


getResults(variables).then((res)=>{
    console.log(res)
    fetch("/app/"+user_id, {method:"PUT", body:JSON.stringify(res)}).then(res => {}).catch(err => console.log(err));
});


function getRandomizedVariablesWithCaseInfo(variables, caseInfos){
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    let tmp = [];
    for (let caseInfo of caseInfos){
        for(let v of variables){
            v.caseInfo = caseInfo;
            tmp.push(v)
        }
    }

    shuffleArray(tmp);

    return tmp;
}




async function getResults(variables) {
    const formResults = null;
    const caseInfos = [{caseName:"CamelCase", caseConverter:toCamel}, {caseName:"kebab-case", caseConverter:toKebab}]
    const testResult1 =  await runtTest1(getRandomizedVariablesWithCaseInfo(variables, caseInfos));
    showEnd();

    const visited = getCookie("doneTest") ==="true";
    setDoneTest();
    return {formResults:formResults, testResult1:testResult1, doneTest: visited}
}




function showEnd(){
    document.body.innerText = "Thanks for attending this test";
}


async function runtTest1(variables){
    const res = [];
    for (let v of variables) {
        const app = new App(v, entrypoint, toCamel);
        res.push(await app.start());
    }
    return res;
}


function setDoneTest() {
    document.cookie = "doneTest=true; expires=Thu, 18 Dec 2099 12:00:00 UTC";
}

function getCookie(name)
{

    const cookiestring=RegExp(name+"=[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}



function toCamel(words) {
    return words.map(w => w.charAt(0).toUpperCase() + w.substr(1, w.length)).join("");
}

function toKebab(words) {
    words.join("-");
}

