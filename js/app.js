'use strict';

//array to store all Busmall image instances
Images.allBusMallImages = [];
Images.totalNumberOfClicks = 0;

Images.lastDisplayed = [];

//access the section element from DOM
var sectionEl = document.getElementById('product-section');
//access the ul element from DOM
var ulEl = document.getElementById('results');

//array to store names for our chart labels
var imageNames = [];

//array to store votes per product
var productVotes = [];


//make a constructor function for Images objects
function Images(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Images.allBusMallImages.push(this);
  imageNames.push(this.name);
}
console.log(Images.allBusMallImages);

//create instances of Busmall Pics
new Images('R2D2 bag', 'img/bag.jpg');
new Images('banana cutter', 'img/banana.jpg');
new Images('bathroom ipad stand', 'img/bathroom.jpg');
new Images('rainboots with holes', 'img/boots.jpg');
new Images('tiny breaky cooker', 'img/breakfast.jpg');
new Images('horrible gum', 'img/bubblegum.jpg');
new Images('rounded chair', 'img/chair.jpg');
new Images('cthulhu monster figure', 'img/cthulhu.jpg');
new Images('duck bill for dogs', 'img/dog-duck.jpg');
new Images('dragon meat', 'img/dragon.jpg');
new Images('silverware pens', 'img/pen.jpg');
new Images('pet foot brooms', 'img/pet-sweep.jpg');
new Images('pizza scissors', 'img/scissors.jpg');
new Images('terrible shark sleeping bag', 'img/shark.jpg');
new Images('babby sweep outfit', 'img/sweep.png');
new Images('tauntaun sleeping bag', 'img/tauntaun.jpg');
new Images('unicorn meat', 'img/unicorn.jpg');
new Images('tentacle usb', 'img/usb.gif');
new Images('looped water can', 'img/water-can.jpg');
new Images('wine glass', 'img/wine-glass.jpg');

//LOCAL STORAGE
var multipleSurveysTotal = [];

if (localStorage.votesInStorage) {
  for (var j = 0; j < productVotes.length; j++) {

    multipleSurveysTotal[j] = productVotes[j] + JSON.parse(localStorage.votesInStorage)[j];
  }
} else {
  multipleSurveysTotal = productVotes;
}
localStorage.votesInStorage = JSON.stringify(multipleSurveysTotal);


//When the user clicks on the button, toggle between hiding and showing the dropdown
function dropdownFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {

    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
//populate top of cart page with ordered item information

//get the locally stored ordered item  and quantity
if(localStorage.orderedItemCart){
  itemCart = JSON.parse(localStorage.getItem('orderedItemCart'));
  quantityCart = JSON.parse(localStorage.getItem('orderedQuantityCart'));
}
else {
  var ulElement = document.getElementById('order-summary');
  ulElement.textContent = 'Sorry there is no record of you selecting any items.';
}

//display ordered items and quantity on the page
var ulElement = document.getElementById('order-summary');
var liElement = document.createElement('li');

for(var i in itemCart)




//create event listener for clicks on images
sectionElement.addEventListener('click', manageClick);

