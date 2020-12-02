class App {
    words;
    DOMid;
    entrypoint;
    count = 0;

    constructor(words, DOMid, callback) {
        this.words = words;
        this.DOMid = DOMid;
        this.entrypoint = document.getElementById(this.DOMid);
        this.callback = callback;
    }

    start() {
        // let ejs = require('ejs');

         let html = entrypoint.innerHTML = ejs.render(caseTest01());
         console.log(entrypoint.innerHTML)
        // let html = '<button id="btn" type="button">Click Me!</button>'
        entrypoint.innerHTML = html;
        let btn = document.getElementById("btn");
        btn.onclick = (e)=>this.doStuff(e);
    }

    doStuff(e){
        this.count++;
        console.log(this.count);


    }

    toCamel(words){
       return words.map(w=>w.charAt(0).toUpperCase() + w.substr(1,w.length)).join("");
    }

    toKebab(words){
        words.join("-");
    }


}