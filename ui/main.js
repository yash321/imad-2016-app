console.log('Loaded!');
var img= document.getElementById('bg');
var marginLeft=0;
var counter=0;
function moveright(){
    while(marginLeft!=40)
    {
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
    }
    if(marginLeft==40)
    {
        while(marginLeft!=-40)
        marginLeft=marginLeft-5;
        img.style.marginLeft=marginLeft+'px';
    }
        
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
  request.open('GET','http://yash321.imad.hasura-app.io/counter');
  request.send(null);
  
};
var nameInput=document.getElementById('name');
var name2=nameInput.value;
var submit=document.getElementById('sub');
submit.onclick=function()
{
  var names=[];
  var list='';
  for(var i=0;i<names.length;i++)
  {
      list+='<li>'+names[i]+'<li>';
  }
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
};