
window.onload = function() {
  var $ = function (selector){return document.querySelector(selector);};  // this is not jQuery

/* ############################################################## 
                      Navigation
   ############################################################## */
  function toggleMenu(){
    $("#main-nav").classList.toggle("open");
    $(".overlay").classList.toggle("open");
    $(".trigger").classList.toggle("open");
    $("#body").classList.toggle("open");
  }
  
  //behaviour if you click the menu button
  $(".trigger").onclick = toggleMenu;
  
  //behaviour if you click a menu item
  $("#main-nav").getElementsByTagName("li").onclick = toggleMenu;
  
  //behaviour if you click the overlay
  $(".overlay").onclick = toggleMenu;


/* ############################################################## 
                      ASSIGNMENT #1 START
   ############################################################## */
   
  var allItems = document.querySelectorAll(".item");  
  var targets = $("#accordion").getElementsByTagName("a");

  function hideAll(){
    for(var j = 0; j <= allItems.length - 1; j++){  
        allItems[j].classList.remove("open"); // hide all up currently open
    }	 // for j loop [inner]
  }

  hideAll(); // ensure that even all accordions are closed on load. Remove this if you want an item open by default


  /* accordion */
  function accordion(){

    for(var i = 0; i <= targets.length - 1; i++){
      
      targets[i].onclick = function(event){

        event.preventDefault(); // stops first click from trying to fire anchor href.  

        if(this.parentNode.classList.contains("open") == false){
          hideAll();
          this.parentNode.classList.add("open");
        }else{
          hideAll();
        }

      }; // accordion <a> click
      
    };// for i loop 

  }

  accordion(); // register the click events. If this is not called first, the initial click does not fire correctly
  
  $("#accordion").onclick = accordion;

};// onload