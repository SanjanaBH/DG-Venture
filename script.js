function onChange() {
  var selectValue = document.getElementById("orderby").value;

  var bikeGuard = document.querySelectorAll("li.Bike-leg-guard");
  var legGuard = document.querySelectorAll("li.Leg-guard");
  var bardhalProducts = document.querySelectorAll("li.Bardhal-Products");
  var accessories = document.querySelectorAll("li.Accessories");
  var helmets = document.querySelectorAll("li.Helmets");

  if (selectValue == "Bike-leg-guard") {
    for (var i = 0; i < bikeGuard.length; i++) {
      bikeGuard[i].style.display = "block";
    }

    for (var i = 0; i < legGuard.length; i++) {
      legGuard[i].style.display = "none";
    }
    for (var i = 0; i < bardhalProducts.length; i++) {
      bardhalProducts[i].style.display = "none";
    }
    for (var i = 0; i < accessories.length; i++) {
      accessories[i].style.display = "none";
    }
    for (var i = 0; i < helmets.length; i++) {
      helmets[i].style.display = "none";
    }
    preventDefault();
  } else if (selectValue == "Leg-guard") {
    for (var i = 0; i < legGuard.length; i++) {
      legGuard[i].style.display = "block";
    }

    for (var i = 0; i < bikeGuard.length; i++) {
      bikeGuard[i].style.display = "none";
    }
    for (var i = 0; i < bardhalProducts.length; i++) {
      bardhalProducts[i].style.display = "none";
    }
    for (var i = 0; i < accessories.length; i++) {
      accessories[i].style.display = "none";
    }
    for (var i = 0; i < helmets.length; i++) {
      helmets[i].style.display = "none";
    }
    preventDefault();
  } else if (selectValue == "Bardhal-Products") {
    for (var i = 0; i < bardhalProducts.length; i++) {
      bardhalProducts[i].style.display = "block";
    }

    for (var i = 0; i < bikeGuard.length; i++) {
      bikeGuard[i].style.display = "none";
    }
    for (var i = 0; i < legGuard.length; i++) {
      legGuard[i].style.display = "none";
    }
    for (var i = 0; i < accessories.length; i++) {
      accessories[i].style.display = "none";
    }
    for (var i = 0; i < helmets.length; i++) {
      helmets[i].style.display = "none";
    }
    preventDefault();
  } else if (selectValue == "Accessories") {
    for (var i = 0; i < accessories.length; i++) {
      accessories[i].style.display = "block";
    }

    for (var i = 0; i < bikeGuard.length; i++) {
      bikeGuard[i].style.display = "none";
    }
    for (var i = 0; i < legGuard.length; i++) {
      legGuard[i].style.display = "none";
    }
    for (var i = 0; i < bardhalProducts.length; i++) {
      bardhalProducts[i].style.display = "none";
    }
    for (var i = 0; i < helmets.length; i++) {
      helmets[i].style.display = "none";
    }
    preventDefault();
  } else if(selectValue == "Helmets") {
    for (var i = 0; i < helmets.length; i++) {
      helmets[i].style.display = "block";
    }

    for (var i = 0; i < bikeGuard.length; i++) {
      bikeGuard[i].style.display = "none";
    }
    for (var i = 0; i < legGuard.length; i++) {
      legGuard[i].style.display = "none";
    }
    for (var i = 0; i < bardhalProducts.length; i++) {
      bardhalProducts[i].style.display = "none";
    }
    for (var i = 0; i < accessories.length; i++) {
      accessories[i].style.display = "none";
    }
    preventDefault();
  } else {
    for (var i = 0; i < bardhalProducts.length; i++) {
      bardhalProducts[i].style.display = "block";
    }
    for (var i = 0; i < bikeGuard.length; i++) {
      bikeGuard[i].style.display = "block";
    }
    for (var i = 0; i < legGuard.length; i++) {
      legGuard[i].style.display = "block";
    }
    for (var i = 0; i < accessories.length; i++) {
      accessories[i].style.display = "block";
    }
    for (var i = 0; i < helmets.length; i++) {
      helmets[i].style.display = "block";
    }
    preventDefault();
  }
}












$(document).ready(function () {
  $(".carousel1").slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true,
  });
});

// Slick version 1.5.8
