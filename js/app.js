

var images = [];

var resultsArray = [];

count = 0;


var imageObject = function(imageSource, Name, selected){
  this.imageName = Name;
  this.imageSource = imageSource;
  this.y = selected;

};

var bag = images.push(new imageObject("bag.jpg", "bag"));
var banana = images.push(new imageObject("banana.jpg", "banana"));
var boots = images.push(new imageObject("boots.jpg", "boots"));
var chair = images.push(new imageObject("chair.jpg", "chair"));
var cthulhu = images.push(new imageObject("cthulhu.jpg","cthulhu"));
var dragon = images.push(new imageObject("dragon.jpg","dragon"));
var pen = images.push(new imageObject("pen.jpg","pen"));
var scissors   = images.push(new imageObject("scissors.jpg", "scissors"));
var shark = images.push(new imageObject("shark.jpg","shark"));
var sweep = images.push(new imageObject("sweep.jpg","sweep"));
var unicorn  = images.push(new imageObject("unicorn.jpg","unicorn"));
var usb = images.push(new imageObject("usb.jpg","usb"));
var water_can = images.push(new imageObject("water_can.jpg","water can"));
var wine_glass = images.push(new imageObject("wine_glass.jpg","wine glass"));


//shows 3 random images on the screen
function showImages() {
  // check if there has been 15 selections
  if (count === 15) {
    seeTotals();
    count = 0;
  } else {
    //clear the done button
    var buttonLocation = document.getElementById("doneButton");
    buttonLocation.innerHTML = "";
    //get 3 images
    var randomImageArray = [];
    var container = document.getElementById("images-container");
    container.innerHTML = "";
    for (var index = 1; index <= 3; index++) {
      do{
        var randomIndex = Math.floor(Math.random() * images.length);

        var randomImage = images[randomIndex];
        console.log(randomImage.imageSource);
        console.log(randomImageArray.indexOf(randomImage.imageSource));
      } while (randomImageArray.indexOf(randomImage.imageSource) >=0);
      var image = document.createElement("img");
      image.setAttribute("src","images/"+randomImage.imageSource);

      randomImageArray.push(randomImage.imageSource);


      container.appendChild(image);
      makeImagesClickable();
    }
  }
};

function makeImagesClickable() {
  var images = document.getElementsByTagName("img");
  for (var index = 0; index < images.length; index++) {
    images[index].addEventListener("click", recordClick);
  }
};

function recordClick(event) {
  var clickedItem = event.target;
  var itemSource = clickedItem.src;
  var lastSlash = itemSource.lastIndexOf("/") + 1;
  itemSource = itemSource.substring(lastSlash);
  console.log(itemSource + " was clicked.");
  resultsArray.push(itemSource);
  count++;
  showImages();
  progressBar();
};

function seeTotals(){
  var buttonLocation = document.getElementById("doneButton");
  var buttonElement=  document.createElement("button");
  buttonElement.addEventListener("click",showChart);
  var buttontext =  document.createTextNode("Show Results");
  buttonElement.appendChild(buttontext);
  buttonLocation.appendChild(buttonElement);
};



function progressBar() {
  var elem = document.getElementById("myBar");
  var width = Math.floor((resultsArray.length/15)*100);
  // console.log(width);
  elem.style.width = width + '%';
}


function showChart () {
  var chart = new CanvasJS.Chart("partners", {
    title:{
      text: "My First Chart in CanvasJS"
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "doughnut",
        dataPoints: [
          { label: "apple",  y: 10  },
          { label: "orange", y: 15  },
          { label: "banana", y: 25  },
          { label: "mango",  y: 30  },
          { label: "grape",  y: 28  }
        ]
      }
    ]
  });
  chart.render();
}


window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
