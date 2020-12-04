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
        const formID = "hello";

        this.startTime = new Date().getMilliseconds();
        // const template = {formId:formID, title:variables, variables: this.wordsToVar(variables)};
        const template = {formId:formID, title:variables};
        this.entrypoint.innerHTML = ejs.views_test2(template);
        const form = document.getElementById(formID);

        return new Promise(resolve => {
            form.onsubmit = (e)=>{
                e.preventDefault();
                resolve(e);
            }
        });
    }








}