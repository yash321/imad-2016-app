console.log('Loaded!');
var element = document.getElementById('maintext');
element.innerHTML='NEW VALUE';
var img= document.getElementById('bg');
var marginleft=0;
function maoveright(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,100);
    
}