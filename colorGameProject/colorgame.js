var num=6;
var color=[]=generaterandomcolor(num)
var squares=document.querySelectorAll(".square");
var chances=3;
var chancedisplay=document.querySelector("#chance");
var pickedcolor=pickcolor();
var colordiaplay=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton =document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");
colordisplay.textContent = pickedcolor;

easybtn.addEventListener("click",function(){
this.classList.add("selected");
hardbtn.classList.remove("selected");
num=3;
color = generaterandomcolor(num);
pickedcolor=pickcolor();
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{
	if(color[i]){
		squares[i].style.backgroundColor=color[i];
	}
	else{
		squares[i].style.display="none";
	}
}
});

hardbtn.addEventListener("click",function(){
	this.classList.add("selected");
	easybtn.classList.remove("selected");
	num=6;
	color = generaterandomcolor(num);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
      for(var i=0;i<squares.length;i++)
      {
		squares[i].style.backgroundColor=color[i];
		squares[i].style.display="block";
	  }	
});

resetbutton.addEventListener("click",function(){
	color=generaterandomcolor(num);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color[i];
	}
	h1.style.backgroundColor="steelblue";
});


//function for changing color on correct selection
function changecolor(color){
      for(var i=0;i<squares.length;i++)
      { 
	    squares[i].style.backgroundColor=color;
      }
}

//function for picking random color
function pickcolor(){
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}

//function to getrandom colors in array
function generaterandomcolor(num) {
	var arr=[];
     for(var i=0;i<num;i++){

       arr.push(randomcolor());
     }


	return arr;
}

//function to generate random color
function randomcolor() {
	//for red
	var r=Math.floor(Math.random()*256);
	//for green
	var g=Math.floor(Math.random()*256);
	//for blue
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


for(var i=0;i<squares.length;i++){
	//initial colr
	squares[i].style.backgroundColor=color[i];
	//clicked color
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor)
		{ 
			changecolor(clickedcolor);
			messagedisplay.textContent="CORRECT";	
			resetbutton.textContent="PLAY again?";
			h1.style.backgroundColor=clickedcolor;	
		}
		else
		{
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try Again!!!!!";
		}
	});
}

function gameover()
{
	
}



