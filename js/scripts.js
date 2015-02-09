window.onload = function () {
	// grab elements faster can use . and # characters
	var $ = function (selector) {return document.querySelector(selector);};	
	var divs = document.getElementsByTagName("div");
	var items = [];
	var descs  = [];
	var titles  = [];

	//catch + add items to various arrays for later use. scrape based on class name
	for (var i = 0; i < divs.length; i++){
		if(divs[i].className == "accordion-item"){
			items.push(divs[i]);
		}
		if(divs[i].className == "accordion-title"){
			titles.push(divs[i]);
		}
		if(divs[i].className == "accordion-desc"){
			descs.push(divs[i]);
		}
	}

	// see if arrays are gathering correctly
	console.log(items);
	console.log(descs);
	console.log(titles);

		for(var i = 0; i < items.length;i++){
			titles[i].onclick = function (){
				this.classList.toggle("highlight");
				var open = this.parentNode.querySelector(".accordion-desc");
				var close = this.parentNode.querySelector(".closer");
				open.classList.toggle("open");
				close.classList.toggle("close");
				if(open.className == "accordion-desc open"){
					items
				}
			};
		}
}//window.onload