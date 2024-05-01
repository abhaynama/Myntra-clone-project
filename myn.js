let x = document.querySelector(".transim") ;
let cate = document.querySelector("#category");

function setimg(i){

   
   return new Promise((resolve, reject) => {

    setTimeout(()=>{
    let y =  `myn${i}.webp` ;
    x.setAttribute("src",y);
   
    console.log("abhay");
    
    resolve("sucess");
    },5000)
   
})

}
 async function changeimg(i)
  {

     for(let i=1;i<=4;i++){
       await setimg(i);
       if(i==4){

        i=0;
       }
     }
     
}


changeimg();




let z = document.querySelectorAll(".btn");


function getimg(j){

   
   
     let y =  `myn${j}.webp` ;
     x.setAttribute("src",y);
     
     img.classList.remove('slide-in');
     console.log("abhay");
   
    
    
 }
 
 

for(let j=0;j<=3;j++){

    z[j].addEventListener("click", ()=>{
        getimg(j+1);
        
       
        })
}

let catlist=["cat3.webp","cati.jpg","cat4.webp","cat5.webp","cat2.webp","cat6.jpg","cat6.jpg","cat2.webp","cat4.webp"]
for(let code of catlist){
let ne = document.createElement("img");
cate.append(ne) ;

ne.setAttribute("src",code);
ne.setAttribute("class","b2");
}

