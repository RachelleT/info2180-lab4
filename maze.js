window.onload = function () {
		var boundary1 = document.getElementById("boundary1");
		boundary1.onmouseover = function() {
			this.setAttribute("class", "boundary youlose");
		};
		
		var boundary = document.querySelectorAll(".boundary");
		var a = 0;
		var b = 0;
		var tracker = 0;
		for ( a = 0; a < boundary.length; a++)
		{
			boundary[a].onmouseover = function(){
				for ( b = 0; b< boundary.length-1;b++){
					boundary[b].setAttribute("class","boundary youlose");
					
				}
				g++;
				document.getElementById("status").innerHTML = "You lose";
			}
		}
		var e = document.getElementById("end");
		e.onmouseover = function(){
			if (tracker == 0)
			{
				document.getElementById("status").innerHTML = "You Win";
			};
		};
		
		var s = document.getElementById("start");
		s.onclick = function(){
			tracker=0;
			document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin.";
			for ( a = 0; a < boundary.length-1;a++) {
				boundary[a].setAttribute("class","boundary boundary");
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
					for (b = 0; b< boundary.length ; b++)
					{
						boundary[b].setAttribute("class","boundary youlose");
					}
				};
			};
			
		};
		
		
	};	
