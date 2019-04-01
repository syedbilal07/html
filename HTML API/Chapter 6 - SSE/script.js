function eventSource()
{	
	if(typeof(EventSource)!== undefined)
	{
		var source = new EventSource("text.php");
		source.onmessage = function(event)
		{
			document.getElementById("eventSource").innerHTML += event.data + "<br />";
		}
	}
		else
		{
			document.getElementById("eventSource").innerHTML = "Sorry, your browser does not support server-sent events...";
		}
}
