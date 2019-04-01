var x = document.getElementById("getLocation");
function getLocation()
{
	if(navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition,showError)
	}
	else
	{
		x.innerHTML = "Geolocation is not supported by this browser";
	}
}
function showPosition(position)
{
	x.innerHTML = "Latitude:- " + position.coords.latitude + "<br />" +
	"Longitude:- " + position.coords.longitude;	
	var laton = position.coords.latitude + "," + position.coords.longitude;
	var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +laton+"&zoom=14&size=400x300&sensor=false";
	document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
	
}
function showError(error)
{
	switch(error.code)
	{
		case error.PERMISSION_DENIED:
		x.innerHTML = "User Denied The Permission For Location";
		break;
		case error.LOCATION_UNAVAILABLE:
		x.innerHTML = "Location Is Unavailable"
		break;
		case error.TIMEOUT:
		x.innerHTML = "The Request Has Been Timed Out";
		break;
		case error.UNKNOWN_ERROR:
		x.innerHTML = "An Unknown Error Has Occured";
		break;
	}
}