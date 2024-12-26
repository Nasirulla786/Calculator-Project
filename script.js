let str = "";
let buttons = document.querySelectorAll(".btn");
let ip= document.querySelector("input");



buttons.forEach(e => {
    e.addEventListener("click", (e) => {
        ip.style.fontSize = "40px"; 


        if(e.target.innerHTML=="="){
         
            str = eval(str);
            document.querySelector("input").value = str;
          

        }

        else if(e.target.innerHTML=="C"){
            str="";
            document.querySelector("input").value = str;
        }


        else if(e.target.innerHTML=="X"){
            str = str.slice(0, -1);
            document.querySelector("input").value = str;
        }


        else{
        console.log(e.target); 
        str = str + e.target.innerHTML;
         document.querySelector("input").value = str;

        }
    });
});
