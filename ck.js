var i =0;
const myArr= [];
function loadtxt()
{ 
    createnextbutton();
    getText("checktxt.txt");
    document.getElementById("5").innerHTML = myArr[i];
}

    




async function getText(file)
{
    

        let A = await fetch(file);
        let B = await A.text();
        facts =B;
        const myArr = facts.split(".");
        document.getElementById("5").innerHTML = myArr[i];
        if (i>=myArr.length)
        {   
            removenextbutton("nextbutton");
            document.getElementById("5").innerHTML = "last one"; 
            let btn = document.createElement("button");
            btn.innerHTML = "Start from first";
            btn.id="startbutton";
            btn.onclick = function () 
            { 
                moreactions(); 
    
            };

            document.body.appendChild(btn);

        }
                
}
function createnextbutton()
{
    let bton = document.createElement("button");
    bton.innerHTML = "Next";
    bton.id="nextbutton";
    bton.onclick = function () 
    {
        i+=1;
        getText("checktxt.txt");
    }
    document.body.appendChild(bton);

}
   
function removenextbutton(id)
{
    var bton = document.getElementById(id);
    bton.parentNode.removeChild(bton);
}



function moreactions() {
    i = 0;
    createnextbutton();
    getText("checktxt.txt");
    removenextbutton("startbutton");
    
}

/*
    fetch('checktxt.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            return data;
        });*/