/* Type Js Start*/
var typed = new Typed('.element', {
    strings: ['A Professional Frontend Web Developer',],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    showCursor: false,
    smartBackspace: true,
});
var typed = new Typed('.my_name', {
    strings: ['MD.AL-AMIN',],
    typeSpeed: 300,
    loop: false,
    showCursor: false,
    smartBackspace: true,
});
/*Type Js Ends*/ 
/* CounterUp Js Start */
$(".counter").counterUp({
    delay: 10,
    time: 1000
});

/* CounterUp Js Ends */
/* Portfolio Js*/

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("all_img");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("portfolio_navbar");
var btns = btnContainer.getElementsByClassName("my_link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Portfolio Js*/ 

/* Scroll to Top Start*/ 

const scroll_top = $(".scroll_top");


window.addEventListener("scroll",() =>{
  if (window.pageYOffset > 100){
    scroll_top.addClass("active2");
  }else{
    scroll_top.removeClass("active2");
  }
})

/* Scroll to Top Ends*/ 