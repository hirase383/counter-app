let count =0;
function increment(){
    count = count+1;
    document.getElementById("count-val").innerText=count;
}
function decrement(){
    count = count-1;
    if(count>=0){
    document.getElementById("count-val").innerText=count;
    }
    else{
        document.getElementById("count-val").innerText=0;
    }
}
function reset(){
    document.getElementById("count-val").innerText=0;
}
