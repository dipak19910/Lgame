var ar = [];
var win = new Array(64);
for(var i in win)
	win[i] = "lose"
var c = 0;
function tableCreate()
{
	index();
}
function tableCreate1()
{
	var name = prompt("Enter the user name");
	if(name != null)
	{
		document.getElementById("name").innerHTML = "Player Name: "+name;
	tableCreate();
	}
	else
		window.open("file:///home/com53/project/Lgame/l.html");
}
function index () {

	// body...

	var table = document.getElementById("table");
	for(var i = 1; i <= 8; i ++)
	{
		var row = table.insertRow(i-1);

		for(var j = 1; j <= 8; j++)
		{
			ar.push(""+i+j);

			var cell = row.insertCell(j-1);
			if(i %2 ===0 && j %2 ===0)
				cell.style.backgroundColor = "#559431" ;
			else if(i %2 ===0 && j %2!= 0)
				cell.style.backgroundColor = "#4F564B";
			else if(i %2 !=0 && j%2 ===0)
				cell.style.backgroundColor = "#4F564B";
			else
				cell.style.backgroundColor = "#559431";

			cell.id = ""+i+j;
			cell.setAttribute("onclick","fun(this,"+""+i+j+")");
		}
	}
	return ar;
}
var b = true;
var number = 0;
function fun(cell, value)
{
	//console.log(value);
	if(b)
	{
		number = value;
		b = false;
		var img = document.createElement("img");
		img.id = "image";
		var td = document.getElementById(value);
		td.appendChild(img);
		c ++;

	}
	else
	{
		
		var ch = checkStatus(number,value);
		//console.log(ch);
		if(ch)
		{c++;
			var color_check = document.getElementById(value.toString()).style.backgroundColor;
		//	console.log(color_check);

			 if(color_check === "red")
			{
				alert("Allready visited");
			}
			else
			{

			var old = document.getElementById(number.toString());
			var im = document.getElementById("image");
			old.removeChild(im);
			//number = value;
			old.style.backgroundColor = "red";
			var new_ = document.getElementById(value.toString());
			//whrite code 
			var color =  new_.style.backgroundColor;
			
			var  img = document.createElement("img");
			img.id = "image";
			new_.appendChild(img);

			var length = ar.indexOf(""+number);
			win[length] = "win";
			number = value;
			lose(new_);

		}
			var count  = 0;
			for (var i = 0; i < win.length; i++) {
				if(win[i] === "win")
						count++;
						};
			if(count >=63)
				alert("You won the game");




		}
		else
			alert("Please move to L shape");

	}
	document.getElementById("count").value = c.toString();
	
}

function checkStatus(number,value)
{
	var n = Math.abs(number - value);
	var ch = true;
	
	switch(n)
	{
		case 8:
		case 23:
		case 12:
		case 19:
		case 21:
		ch = true;
		break;
		default :
		ch = false;
	}
	
	return ch;
}

function lose(value)
{
	
	var array = ["8","23","12","19","21","-8","-23","-12","-19","-21"];
 	var n = Number(value.id);
	var  bool = false;
	console.log(value);
 	for(var i in array)
 	{
 	
	 	var ch = n - Number(array[i]);
 		var d = document.getElementById(ch.toString());
 		
 		var color = "";
 		if(d!=null){
 			
 			color = d.style.backgroundColor;
 		 }
 		if(ar.indexOf(ch.toString()) >-1 && color != "red" )
 		{
 			bool = true;
 			console.log("Hello");
 			break;
 		}
 	}
 	if(bool === false)
 		alert("You loose the game");
}