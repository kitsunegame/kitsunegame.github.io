const sendEmail=(name,email,text)=>{
    var name = document.getElementById("name");
    var email = document.getElementById('email');
    var text = document.getElementById('text');

    
        
    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "kitsunekitsunegames@gmail.com",
        Password : "A9BD761232404614167ED6B16A52058DCEC3",
        //SecureToken : "4503e293-303b-4993-b15e-aa53c2ecfc80",
        To :  email.value,
        From :"kitsunekitsunegames@gmail.com",
        Subject : name.value,
        Body : text.value
    }).then(
       message =>alert("Mesajınız gönderildi")
    );
    
    event.preventDefault()
}


let scrollContainer=document.querySelector(".gallery")
let back=document.getElementById("back")
let next=document.getElementById("next")


next.addEventListener("click",()=>{
    scrollContainer.scrollLeft +=1220;
})
back.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=1220;
})

let ab=document.getElementById("about")
let com=document.getElementById("comment")
let con=document.getElementById("connect")

ab.addEventListener("click",()=>{
    window.scrollTo(0,2600)
})
com.addEventListener("click",()=>{
    window.scrollTo(0,3200)
})
con.addEventListener("click",()=>{
    window.scrollTo(0,4100)
})



let openbtn=document.getElementById("nav-open")
let closebtn=document.getElementById("nav-close")

let mobileBar=document.getElementById("mobile-bar")

openbtn.addEventListener("click",()=>{
    openbtn.style="display:none;"
    mobileBar.style="display:block;"
    closebtn.style="display:block;"
})

closebtn.addEventListener("click",()=>{
    openbtn.style="display:block;"
    mobileBar.style="display:none;"
    closebtn.style="display:none;"
})

mobileBar.addEventListener("click",()=>{
    mobileBar.style="display:none;"
    closebtn.style="display:none;"
    openbtn.style="display:block;"
})

var prevScrollpos=window.pageYOffset;

window.onscroll=function(){
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
        mobileBar.style="display:none;"
        closebtn.style="display:none"
  } 
  else {
    mobileBar.style="display:none;"
    closebtn.style="display:none"
    openbtn.style="display:block;"
  }
  prevScrollpos = currentScrollPos;
}

