class App {
    entrypoint;
    wordsToVar;
    cs;


    constructor(variables, DOMid, wordsToVar, cs) {
        this.variables = variables;
        this.entrypoint = document.getElementById(DOMid);
        this.wordsToVar = wordsToVar;
        this.cs = cs;


    }


    getAnswer(){
        return this.variables.filter(v=>v.correct).words;
    }

    showAnswer() {

        this.entrypoint.innerHTML=  ejs.views_button({answer: this.getAnswer()});
        const button = document.getElementById("readyButton");
        return new Promise(function (resolve) {
            button.onclick = function (e) {
                e.preventDefault();
                resolve();
            };
        })
    }

    async start() {

        await this.showAnswer();

        const className = "hello";
        // const template = {formId:formID, title:variables, variables: this.wordsToVar(variables)};
        const tmp = this.variables.map(v => this.wordsToVar(v.words));
        const template = {buttonClass: className, variables: tmp};
        const html = ejs.views_test2(template);
        this.entrypoint.innerHTML = html;

        const variables = this.variables;
        const startTime = new Date().getTime();
        const wordsToVar = this.wordsToVar;
        const cs = this.cs;

        return new Promise(function (resolve) {
            const buttons = document.getElementsByClassName(className);

            for (let button of buttons) {
                button.onclick = function (e) {
                    e.preventDefault();
                    const answer = this.textContent;
                    this.style.color = '#cfffa9';
                    const now = new Date().getTime();
                    const totalTimeMs = now - startTime;
                    let isRightAnswer = false;
                    variables.forEach(v => {
                            if (wordsToVar(v.words) === answer && v.correct) {
                                isRightAnswer = true;
                            }
                        }
                    );
                    const data = {totalTimeMs: totalTimeMs, isRightAnswer: isRightAnswer, answer: answer, case:cs};
                    resolve(data);
                }
            }
        });
    }

    showWords() {

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }

        console.log(this.variables);
        this.variables.forEach(v => {
                if (v.correct) document.body.innerText = `find  ${v.words.join(" ")}`;
                sleep(3000);
            }
        );

    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
}