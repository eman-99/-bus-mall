'use strict';
var imgs = [
    "bag", "banana",
    "bathroom", "boots",
    "breakfast", "bubblegum",
    "chair", "cthulhu",
    "dog-duck", "dragon",
    "pen", "pet-sweep",
    "scissors", "shark",
    "sweep", "tauntaun",
    "unicorn", "usb",
    "water-can", "wine-glass"];

var counter = 0;

var leftImg = document.getElementById("leftImage");
var middleImg = document.getElementById("middleImage");
var rightImg = document.getElementById("rightImage");
var imagSect = document.getElementById("imagSect");

function weirdPic(name) {
    this.name = name;
    this.imagePath = `img/${name}.jpg`;
    this.votes = 0;
    this.views = 0;
    weirdPic.all.push(this);
}
weirdPic.all = [];

for (let e = 0; e < imgs.length; e++) {
    new weirdPic(imgs[e]);

}


function render() {


    while (leftImg === rightImg || leftImg === middleImg || rightImg === middleImg) {

        var leftImg = weirdPic.all[randomNumber(0, weirdPic.all.length - 1)];
        var middleImg = weirdPic.all[randomNumber(0, weirdPic.all.length - 1)];
        var rightImg = weirdPic.all[randomNumber(0, weirdPic.all.length - 1)];

    };

    leftImg.views++;
    middleImg.views++;
    rightImg.views++;




    leftImage.setAttribute("src", leftImg.imagePath);
    leftImage.setAttribute("alt", leftImg.name);
    leftImage.setAttribute("title", leftImg.name);

    middleImage.setAttribute("src", middleImg.imagePath);
    middleImage.setAttribute("alt", middleImg.name);
    middleImage.setAttribute("title", middleImg.name);

    rightImage.setAttribute("src", rightImg.imagePath);
    rightImage.setAttribute("alt", rightImg.name);
    rightImage.setAttribute("title", rightImg.name);

    counter++;


}

render();

function list() {


    var container = document.getElementById("imagelist");
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);
    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);



    for (let i = 0; i < weirdPic.all.length; i++) {
        var liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        liEl.textContent = `${imgs[i]} had ${weirdPic.all[i].votes}votes and was shown ${weirdPic.all[i].views} times`;
    }



}

function click(e) {
    if (counter <= 25) {
        console.log(event.target.id);

        
        if (e.target.id !== "imagSect") {

            for (let i = 0; i < weirdPic.all.length; i++) {
                if (e.target.title === weirdPic.all[i].name) {
                    weirdPic.all[i].votes++;

                }

            }
            console.table(weirdPic.all);
            render();
           

        }
        if (counter === 26 ){
            list();
        };
       
    }
    

  
};

imagSect.addEventListener("click", click);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// function stopE (event){
//     if (counter <= 25) {
//       if (event.target.id !== 'imagSect') {
//         for (let i = 0; i < weirdPic.all.length; i++) {
//           if (event.target.title === weirdPic.all[i].name) {
//             weirdPic.all[i].votes++;
//           }


//         }
//         render();
//       } if (counter ===26 ) {
//         list();}
//       }