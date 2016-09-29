console.log('Loaded!');
var element = document.getElementById('maintext');
element.innerHTML='NEW VALUE';
var img= document.getElementById('bg');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,50);
    
}