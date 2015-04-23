window.onload = function () {
    var header = document.getElementById('header');
    var pictures = new Array('images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg');
    var numPics = pictures.length;
    if (document.images) {
        var chosenPic = Math.floor((Math.random() * numPics));
        header.style.background = 'url(' + pictures[chosenPic] + ')';
    }
}