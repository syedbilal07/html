function startCounter()
{
	if(typeof(Worker) !== undefined)
	{
		if(typeof(w) !== undefined)
		{
			w = new Worker("worker.js");
		}
		w.onmessage = function(event)
		{
			document.getElementById("startCounter").innerHTML = "Count Numbers:- " + event.data;
		}
	}
	else
	{
		document.getElementById("startCounter").innerHTML += "Sorry, your browser does not support Web Workers...";
	}
	
}
function stopCounter()
{
	w.terminate();
	w = undefined;
}