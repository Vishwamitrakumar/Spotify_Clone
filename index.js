function show(){
     window.open(" https://open.spotify.com");
}

// const slideval = document.querySelector(".cuu-time");
// const inputs = document.querySelector(".progress-bar");
// inputs.oninput = (() =>{
//    let value = inputs.value;
//    slideval.textContent = value;
// });

//  const slidevalue = document.querySelector(".sp");
//  const inputslider = document.querySelector(".progress");
//  inputslider.oninput = (() =>{
//     let value = inputslider.value;
//     slidevalue.textContent = value;
//  });


 function show1(){
 console.log("480px");
 }
 function show2(){
   console.log("360px");
   } 
   function show3(){
      console.log("240px");
      }
      
      function show4(){
         console.log("180px");
         }
         
         // like and Dislike
       let count = 0;
      
        let sp=document.querySelector(".heart2");
        let img=document.querySelector(".imglike");
          function ht(){
                count = count+1;                 
               sp.innerHTML=count;
               img.style.color="red";
                                     
                   }
                   let  dislike=document.querySelector(".dislike");
         function unlike(){
            if(count>=0){
    sp.innerHTML=count--;
   }
else {
   alert("Please Number is going to negitave value");
}
         }

  // input_boc for Search
         let input_box=document.querySelector(".input_box");
         let search_icon=document.querySelector(".nav_option2");
         let search_btn=document.querySelector(".search_btn");
         function  search(){
            input_box.style.display="block";
            search_btn.style.display="block";
            
         }
         function  search_(){
            input_box.style.display="none";
            search_btn.style.display="none";
            
         }
          search_btn.onclick=function(){
           if(input_box.value==""){
            alert("Pease write the any content in input box then click the button");
           }
           else{
            let url="http://www.google.com/search?q=" +input_box.value;
            window.open(url,'_self');
            input_box.value="";
          }
         }
   
         

         //music player

        
      
               

