function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let logo1 = document.getElementById('highlight-logo-1');
  let logos1 = ['images/apartment-therapy-logo.png', 'images/brides-logo.png', 'images/country-living-logo.png']
  setInterval(function(){
      let random = Math.floor(Math.random()*3)
      logo1.src = logos1[random];
  },800);

  let logo2 = document.getElementById('highlight-logo-2');
  let logos2 = ['images/harper-s-bazaar-logo.png', 'images/HGTV-logo.png', 'images/martha-stewart-logo.png']
  setInterval(function(){
      let random = Math.floor(Math.random()*3)
      logo2.src = logos2[random];
  },800);

  let logo3 = document.getElementById('highlight-logo-3');
  let logos3 = ['images/people-logo.png', 'images/the-spruce-logo.png', 'images/today-show-logo.png']
  setInterval(function(){
      let random = Math.floor(Math.random()*3)
      logo3.src = logos3[random];
  },800);