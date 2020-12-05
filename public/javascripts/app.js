class App {
    words;
    entrypoint;
    wordsToVar;


    constructor(variables, DOMid, wordsToVar) {
        this.variables = variables;
        this.entrypoint = document.getElementById(DOMid);
        this.wordsToVar = wordsToVar;
    }

    start() {
        const className = "hello";


        // const template = {formId:formID, title:variables, variables: this.wordsToVar(variables)};
        const tmp = this.variables.map(v => this.wordsToVar(v.words));
        const template = {buttonClass: className, variables: tmp};
        const html = ejs.views_test2(template);
        this.entrypoint.innerHTML = html;

        const variables = this.variables;
        const startTime = new Date().getMilliseconds();
        const wordsToVar = this.wordsToVar;

        return new Promise(function (resolve) {
            const buttons = document.getElementsByClassName(className);

            for (let button of buttons) {
                button.onclick = function (e) {
                    e.preventDefault();
                    const answer = this.textContent;
                    this.style.color = '#cfffa9';
                    const totalTimeMs = new Date().getMilliseconds() - startTime;
                    let isRightAnswer = false;
                    variables.forEach(v => {
                            if (wordsToVar(v.words) === answer && v.correct) {
                                isRightAnswer = true;
                            }
                        }
                    );
                    const data = {totalTimeMs: totalTimeMs, isRightAnswer: isRightAnswer, answer:answer};
                    resolve(data);
                }
            }
        });
    }


}