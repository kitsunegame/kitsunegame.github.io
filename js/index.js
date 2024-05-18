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



/*document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için formun varsayılan davranışını durduruyoruz
    // Form verilerini alıyoruz
    var name = document.getElementById("name");
    var email = document.getElementById('email');
    var text = document.getElementById('text');
    
    // Verileri konsola yazdırıyoruz
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Text:', text.value);

    
});*/