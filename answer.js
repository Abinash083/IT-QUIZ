class quiz{
    constructor(question,answer,option1,option2,option3,option4){
        this.question=question;
        this.answer=answer;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;

    }
}
const a = new quiz("What was the first computer that had a colour display?","apple II","imac","apple II","BBC Micro","Amiga 500");



function Answer1(qu)
{
    document.getElementById("answer").innerHTML =qu.answer;
    
}

function display(running)
{
    document.getElementById("question").innerHTML =running.question;
    document.getElementById("opt1").innerHTML =running.option1;
    document.getElementById("opt2").innerHTML =running.option2;
    document.getElementById("opt3").innerHTML =running.option3;
    document.getElementById("opt4").innerHTML =running.option4;


}

function nextqt(running)
{
    var num= integer.fromCharCode(running);
    num+=1;
    var str =String.fromCharCode(num);
    display(str);
}



