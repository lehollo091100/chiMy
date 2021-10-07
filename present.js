
var to = '7/10/2021';
var gift_url = 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/p200x200/89627047_2540446009608949_5619129614849802240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fvbQRxB-Dd8AX-qAZdP&_nc_ht=scontent.fsgn2-5.fna&oh=468963dbdb06ad026213f1dd783255e6&oe=6182F1DB';
var gift_image_url = 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/p200x200/89627047_2540446009608949_5619129614849802240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fvbQRxB-Dd8AX-qAZdP&_nc_ht=scontent.fsgn2-5.fna&oh=468963dbdb06ad026213f1dd783255e6&oe=6182F1DB';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

  var _giftLink,
    _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener("click", function (e) {
    present.classList.toggle("open");
    document.getElementById("card").classList.add('card-show');
  }, false);



  nametag.innerText = to;
}

init();

