//for local storage

if(!localStorage.localScore){
    localStorage.localScore=0;
}
else{
    document.getElementById("localScore").textContent=localStorage.localScore;
}
//increment function for localStorage
let incrementLocalScore=()=>{
    localStorage.localScore=parseInt(localStorage.localScore)+1;
    document.getElementById("localScore").textContent=localStorage.localScore;
}

let localHandler=document.getElementById("localButton");
localHandler.addEventListener("click",()=>{
    incrementLocalScore();
});

//for session
if(!sessionStorage.sessionScore){
    sessionStorage.sessionScore=0;
}
else{
    document.getElementById("sessionScore").textContent=sessionStorage.sessionScore;
}

let incrementSessionScore=()=>{
    sessionStorage.sessionScore=parseInt(sessionStorage.sessionScore)+1;
    document.getElementById("sessionScore").textContent=sessionStorage.sessionScore;
}
document.getElementById("sessionButton").addEventListener("click",()=>{
    incrementSessionScore();
});