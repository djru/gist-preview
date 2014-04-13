window.onload = function(){ 
	if(window.location.hash == "#error") {
	
		error_msg = document.createElement("span");
		error_msg.innerHTML = "Error! Bad URL!";
		error_msg.id = 'error';
		error_msg.className = "notification";
		
		document.body.appendChild(error_msg);
	}
	else{
		user_msg = document.createElement("span");
		user_msg.innerHTML = "Simply paste the raw URL of an HTML <a href='https://gist.github.com/'>gist</a> to preview a rendered version.";
		user_msg.id = 'usermsg';
		user_msg.className = "notification";
		
		document.body.appendChild(user_msg);
	}
};