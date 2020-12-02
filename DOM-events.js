const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('you clicked me');
}
function scream(){
    console.log("aaaaaa");
}
btn.onmouseenter = scream;

const btn2 = document.querySelector('#v3');
btn2.addEventListener('click',function(){
    alert("clicked");
});