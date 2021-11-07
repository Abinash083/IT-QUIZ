
class quiz{
    
    constructor(sn,question,answer,option1,option2,option3,option4){
        
        this.sn=sn;
        this.question=question;
        this.answer=answer;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        
        quizs.push(this);

    }
    
}

var quizs=[];
const quiz0 = new quiz("0","What was the first computer that had a colour display?","apple II","imac","apple II","BBC Micro","Amiga 500");
const quiz1 = new quiz("1","What was the first calculating device ?","abacus","imac","apple II","abacus","Amiga 500");
const quiz2= new quiz("2","When was the first computer invented?","1943","1943","1947","1895","200BC");
const quiz3= new quiz("3","When was the The SVGA standard for computer displays was officially defined by VESA?","1989","1985","1923","1989","1963");
var runningqu=0;


function start()
    {
        
        runningqu= 0;
        display(runningqu);
        
        console.log(runningqu);
    
    }
function display()
{
    var qu=quizs[runningqu];
    

    document.getElementById("question").innerHTML =qu.question;
    document.getElementById("opt1").innerHTML =qu.option1;
    document.getElementById("opt2").innerHTML =qu.option2;
    document.getElementById("opt3").innerHTML =qu.option3;
    document.getElementById("opt4").innerHTML =qu.option4;
    

}
function nextqt()
{
    
    if (runningqu<quizs.length-1) 
    {
        runningqu+=1;
        display();
        
    }
    else
    {
        var bton = document.getElementById("button2");
        bton.parentNode.removeChild(bton);

    }
    return runningqu;
}
function Answer()
{
    var qu=quizs[runningqu];
    
    document.getElementById("answer").innerHTML ="If you think "+qu.answer+" then you are right";
    
}
function check()
{
    document.getElementById("answer").innerHTML ="If you think "+qu.answer+" then you are right";
}

