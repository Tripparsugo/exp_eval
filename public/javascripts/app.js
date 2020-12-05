class App {
    words;
    DOMid;
    entrypoint;
    startTime;
    wordsToVar;


    constructor(words, DOMid, wordsToVar) {
        this.words = words;
        this.DOMid = DOMid;
        this.entrypoint = document.getElementById(this.DOMid);
        this.wordsToVar = wordsToVar;
    }

    start() {
        const className = "hello";

        this.startTime = new Date().getMilliseconds();
        // const template = {formId:formID, title:variables, variables: this.wordsToVar(variables)};
        const template = {buttonClass:className, variables:this.words};
        const html = ejs.views_test2(template);
        this.entrypoint.innerHTML = html;


        return new Promise(function(resolve) {
            const buttons = document.getElementsByClassName(className);

            for(let button of buttons) {
                button.onclick = function(e) {
                    e.preventDefault();
                    this.style.color  = '#cfffa9';
                    resolve(this);
                }
            }
        });
    }








}