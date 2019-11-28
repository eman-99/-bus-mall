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

var votesA = [];
var viewsA = [];

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


        viewsA.push(weirdPic.all[i].views);


        votesA.push(weirdPic.all[i].votes);


}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: imgs,
    datasets: [
      {
        label: '# of Votes',
        data: votesA,
        backgroundColor:
          'black'
        ,

        borderWidth: 1
      },
      ///////
      {
        label: '# of Views',
        data: viewsA,
        backgroundColor:
          'pink'
        ,

        borderWidth: 1
      }

      ///////
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

};


   

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
        if (counter === 26) {
            list();
            saveVotes();
        };

    }



};
haveVotes();

imagSect.addEventListener("click", click);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}







function saveVotes(){
  var view = JSON.stringify(weirdPic.all);
  localStorage.setItem('countvote', view);
}


function haveVotes(){
  var vote = localStorage.getItem('countVote');
  if (vote){
    weirdPic.all=JSON.parse(vote);
    render();
  }
}


