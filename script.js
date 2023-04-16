function highlight() {
    //Write your code here
	let st = document.querySelectorAll("strong");
	for (let i = 0; i < st.length; i++) {
		  st[i].style.color = "green";
	}
}


function return_normal() {
    //Write your code here
	let st = document.querySelectorAll("strong");
	for (let i = 0; i < st.length; i++) {
		  st[i].style.color = "black";
	}
    
}
