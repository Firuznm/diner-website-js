// ====   header section start   ====

(() => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("overlay");
  let closed = true;

  const change = () => {
    if (closed) {
      hamburger.classList.add("open");
      menu.classList.add("menu");
    } else {
      hamburger.classList.remove("open");
      menu.classList.remove("menu");
    }
    closed = !closed;
  };

  hamburger.addEventListener("click", change);
})();


// <!-- oz yazdigim nav bar menu  -->
// window.onscroll=function(){

//   const headerTransparent=document.getElementById("header-transparent");
//   const headerWhite=document.getElementById("header-white");

//   headerWhite.style.display="none";
//   headerTransparent.style.display="none";
  
//   if(window.scrollY<350){
//     headerTransparent.style.display="block";
   
//   }else if(window.scrollY>350){
//     headerWhite.style.display="block";
//   }}


// ==== Pages js start ======
//  const pagesMenu=document.querySelector(".pages-menu");
//  const menuBar=[...document.querySelectorAll(".menu-bar")];
 
//     menuBar.forEach(function(items){
//     items.addEventListener("click",()=>{
//       pagesMenu.classList.toggle("no-active");
//    })
//   })

  
//======== slider(swiper) section start  ======

let swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// ====== Menu List with Price SECTION START  ===== 

const menuListA=Array.from(document.querySelectorAll(".menu-list li>a"));

  menuListA.forEach((listA)=>{
 listA.addEventListener("click",(event)=>{
  event.preventDefault();

 readyA=document.querySelector(".menu-list a.active");  //hazirad activ olan a tapiram
 readyActiveDiv=document.querySelector("#menu-list-price div.active"); //hazirad classi activ olan divi tapiram
 

 readyA.classList.remove("active");
 readyActiveDiv.classList.remove("active");
           
           listA.classList.add("active");
readyAhref=listA.getAttribute("href");
document.querySelector(readyAhref).classList.add("active");    
})
  })

// =====  ==== Section  Why Choose Us   start ===== 

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// ====================  input datalarinin gonderilmesi   ====================
const  inputsArr=[...document.getElementsByClassName("data")];
const sendButton=document.getElementsByClassName("sendButton")[0];
 console.log(inputsArr);
//  console.log(sendButton);

sendButton.addEventListener("click",function(e){
  e.preventDefault();
function getdata(arr){
  enterData=[];
for(let i=0;i<arr.length; i++){
  inpValue=arr[i].value.trim();
  //  console.log(inpValue);
  if(inpValue!=""){
    // console.log("tamdir-doludur");
    enterData.push(inpValue);
  }else{
    alert((`${inputsArr[i].id} "olan xana bos qalib  : doldurun"`))
  }
}
return enterData;
}
 getdata(inputsArr);
console.log(enterData);   // bu mene ARREY  qayatrir
///  bura kimi her wey duz gedib 
 
// axios
//     .post("http://localhost:9000/create-data", enterData)
//     .then((sendDatas) => {
//       console.log(sendDatas);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//     location.reload()
})



