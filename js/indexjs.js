function myFunction(iddesc,idpizza) {
    var x = document.getElementById(iddesc);
    var y = document.getElementById(idpizza);
    if (x.style.display === "none") {
        x.style.display="block";
        y.style.display="none";
    }else{
		y.style.display="block";
        x.style.display="none";   
	}

}