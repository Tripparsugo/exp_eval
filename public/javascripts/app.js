class App {
    words;
    DOMid;
    entrypoint;
    count = 0;
    startTime;
    listen;

    constructor(words, DOMid, wordsToVar) {
        this.words = words;
        this.DOMid = DOMid;
        this.entrypoint = document.getElementById(this.DOMid);
        this.callback = callback;
        this.listen = true;
    }

    start() {
        // let ejs = require('ejs');

        this.startTime = new Date().getMilliseconds();

         let html = ejs.render(caseTest01());
         console.log(entrypoint.innerHTML);
        // let html = '<button id="btn" type="button">Click Me!</button>'
        entrypoint.innerHTML = html;
        let btn = document.getElementById("btn");
        btn.onclick = (e)=>this.doStuff(e);
    }

    doStuff(e){
        e.preventDefault();
        if(this.listen) {
            this.count++;
            this.callback(e);
            console.log(this.count);
        }
    }




}