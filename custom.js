window.addEventListener("scroll", function() {
  var elementRights = document.querySelectorAll(".scroll-down-right-animation");
  // var elementRight1 = document.querySelector(".scroll-down-right-animation1");
  // var elementRight2 = document.querySelector(".scroll-down-right-animation2");
  var elementLefts = document.querySelectorAll(".scroll-down-left-animation");
  // var elementLeft1 = document.querySelector(".scroll-down-left-animation1");
  // var elementLeft2 = document.querySelector(".scroll-down-left-animation2");
  // var elementShow = document.querySelector(".show-element");
  var elementTops = document.querySelectorAll(".scroll-down-top-animation");
  var elementBottoms = document.querySelectorAll(".scroll-down-bottom-animation");

  // var positionLeft = elementLeft.getBoundingClientRect().top;  
  // var positionLeft1 = elementLeft1.getBoundingClientRect().top;
  // var positionLeft2 = elementLeft2.getBoundingClientRect().top;
  // var positionRight = elementRight.getBoundingClientRect().top;
  // var positionRight1 = elementRight1.getBoundingClientRect().top;
  // var positionRight2 = elementRight2.getBoundingClientRect().top;
  // var positionShow = elementShow.getBoundingClientRect().top;
  // var positionTop = elementTop.getBoundingClientRect().top;
  // var positionBottom = elementBottom.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  elementRights.forEach(element => {
    var positionRight = element.getBoundingClientRect().top;
    if (positionRight < screenHeight) {
      element.classList.add("slide-in");
    } else {
      element.classList.remove("slide-in");
    }
  });

  elementLefts.forEach(element => {
    var positionLeft = element.getBoundingClientRect().top;
    if (positionLeft < screenHeight) {
      element.classList.add("slide-in");
    } else {
      element.classList.remove("slide-in");
    }
  });

  elementTops.forEach(element => {
    var positionTop = element.getBoundingClientRect().top;
    if (positionTop < screenHeight) {
      element.classList.add("slide-in");
    } else {
      element.classList.remove("slide-in");
    }
  });

  elementBottoms.forEach(element => {
    var positionBottom = element.getBoundingClientRect().top;
    if (positionBottom < screenHeight) {
      element.classList.add("slide-in");
    } else {
      element.classList.remove("slide-in");
    }
  });
});


addEventListener("DOMContentLoaded", (event) => {
  var elementInitTops = document.querySelectorAll(".scroll-down-top-animation-init");
  
  elementInitTops.forEach(element => {
    element.classList.add("slide-in");
  });

});

