var submit=document.getElementById("submit")
var Name=document.getElementById("name")
var email=document.getElementById("email")
var details=document.querySelector(".details")



document.querySelector(".details").style.display="none"

function Add(){
    var div=document.createElement("div")
    div.setAttribute("class","first")
    div.innerHTML=`<div id="info">
    <h4>${Name.value}</h4>
    <p>${email.value}</p>
     </div>

    <div id="button">
       <button onclick="del(event)">Delete</button>
    </div>`
    details.append(div)
    document.querySelector(".details").style.display="block"
    localStorage.setItem('ls_name',Name.value)
    localStorage.setItem('ls_email',email.value)
}

function del(){
    details.remove()
}



// var deleteButtons = document.getElementById("del");

//     deleteButtons.addEventListener('click', function() {
//         var block = this.closest('.details').querySelector(".first");
//         block.remove();
//     });



// var valid=document.getElementById("validation")
// valid.style.display="none"
// document.getElementById("submit").onclick=function(){
//     function filteremail(email){
//         var regex=/^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return regex.test(email)
//     }
//     if(!filteremail(email.value)&&Name.length.value<=0){
//        valid.style.display="block"
//     }
// }


