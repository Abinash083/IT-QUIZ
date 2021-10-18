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
const quiz1 = new quiz("What was the first computer that had a colour display?","apple II","imac","apple II","BBC Micro","Amiga 500");



function Answer1(qu)
{
    document.getElementById("answer").innerHTML =qu.answer;
    
}



