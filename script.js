let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-button");
let turnx=true;
let res=document.querySelector("#winner");
let f=()=>{
    let val=[[0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]];
    for(let a of val){
        if(box[a[0]].innerText!=''&&box[a[1]].innerText!=''&&box[a[2]].innerText!=''&&box[a[0]].innerText==box[a[1]].innerText&&box[a[1]].innerText==box[a[2]].innerText){
            res.style.display="block";
            res.innerText=`WINNER HERE IS ${box[a[0]].innerText}`;
            f2();
        }
        
    }

}
let f2=()=>{
    for(let b of box){
        b.disabled=true;
    }
}
box.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(turnx){
            b.innerText="X";
            turnx=false;
        }else{
            b.innerText="O";
            turnx=true;
        }
        b.style.fontWeight="bold";
        b.disabled=true;
        f();
    });



});
reset.addEventListener("click",()=>{
    turnx=true;
    for(let b of box){
        b.innerText='';
        res.style.display="none";
        b.disabled=false;
    }
})