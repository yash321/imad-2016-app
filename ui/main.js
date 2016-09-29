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
  var request= new XMLHttpRequest();
  request.onreadystatechange=function()
  {
      if(request.readystate===XMLHttpRequest.DONE)
      {
          if(request.status===200)
          {
              var counter= request.ResponsiveText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
  };
  
};