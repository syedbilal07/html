function localStorageObject()
{
	if(typeof(Storage) != undefined)
	{
		localStorage.setItem("lastname", "Bilal");
		document.getElementById("localStorageObject").innerHTML = localStorage.getItem("lastname");
	}
	else
	{
		document.getElementById("localStorageObject").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}
function counterFunction()
{
	if(localStorage.clickcount)
	{
		localStorage.clickcount = Number(localStorage.clickcount) + 1;
	}
	else
	{
		localStorage.clickcount = 1;
	}
	document.getElementById("counterFunction").innerHTML = "You Have Clicked The Button" + " " + localStorage.clickcount + " " + "Times";
}
function sessionStorage()
{
	if(typeof(Storage) != undefined)
	{
		if(sessionStorage.clickcount)
		{
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
		}
		else
		{
			sessionStorage.clickcount = 1;
		}
	}

	document.getElementById("sessionStorage").innerHTML =  "You Have Clicked The Button" + " " + sessionStorage.clickcount + " " + "Times";
}