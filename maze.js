window.onload = function () {
	  main();
	};
	

	function main() 
	{
		var boundary1 = document.getElementById("boundary1");
		boundary1.onmouseover = function() {
			this.setAttribute("class", "boundary youlose");
		};
		
		var boundary = document.querySelectorAll(".boundary");
		var i = 0;
		var a = 0;
		var g = 0;
		for ( i = 0; i < boundary.length; i++)
		{
			boundary[i].onmouseover = function(){
				for ( a = 0; a< boundary.length-1;a++){
					boundary[a].setAttribute("class","boundary youlose");
					
				}
				g++;
				document.getElementById("status").innerHTML = "You lose";
			}
		}
		var end = document.getElementById("end");
		end.onmouseover = function(){
			if (g == 0)
			{
				//window.alert("You Win");
				document.getElementById("status").innerHTML = "You Win";
			};
		};
		
		var start = document.getElementById("start");
		start.onclick = function(){
			g=0;
			document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin.";
			for ( i = 0; i < boundary.length-1;i++) {
				boundary[i].setAttribute("class","boundary boundary");
			};
			var maze = document.getElementById("maze");
			document.onmousemove = function (event) {
				var x = event.clientX;
				var y = event.clientY;
				var l = maze.offsetLeft;
				var r = maze.offsetRight;
				var h = maze.offsetHeight;
				var w = maze.offsetWidth;
				var t = maze.offsetTop;
				if ((x < l)||(x < r))
				{
					for (a = 0; a< boundary.length ; a++)
					{
						boundary[a].setAttribute("class","boundary youlose");
					}
				};
			};
			
		};
		
		
	};	
