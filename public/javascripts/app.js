class App {
    entrypoint;


    constructor(variables, DOMid) {
        this.variables = variables;
        this.entrypoint = document.getElementById(DOMid);
    }


    getAnswer(){
        return this.variables.filter(v=>v.correct)[0].words.join(" ");
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

        const variables = this.variables;
        const caseName = variables.caseInfo.caseName;
        const caseConverter = variables.caseInfo.caseConverter;

        const className = "hello";

        const tmp = this.variables.map(v => caseConverter(v.words));


        const template = {buttonClass: className, variables: tmp};
        const html = ejs.views_test2(template);


        this.entrypoint.innerHTML = html;


        const startTime = new Date().getTime();
        // const wordsToVar = this.wordsToVar;

        return new Promise(function (resolve) {
            const buttons = document.getElementsByClassName(className);

            for (let button of buttons) {
                button.onclick = function (e) {
                    e.preventDefault();
                    const answer = this.textContent;
                    this.style.color = '#cfffa9';
                    const now = new Date().getTime();
                    const totalTimeMs = now - startTime;


                    let data = undefined;
                    variables.forEach(v => {
                            if (caseConverter(v.words) === answer) {
                                data = {totalTimeMs: totalTimeMs, isRightAnswer: v.correct, answer: answer, caseName:caseName, variableSize: v.words.length};
                            }
                        }
                    );

                    resolve(data);
                }
            }
        });
    }




}


