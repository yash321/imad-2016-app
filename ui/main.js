console.log('Loaded!');
var img= document.getElementById('bg');
var marginLeft=0;
var counter=0;
function moveright(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveright,50);
    
};
var button= document.getElementById('counter');
button.onclick=function()
{
  counter=counter+1;
  var span =document.getElementById('count');
  span.innerHTML=count.toString();
};