window.onload = function () {
    var header = document.getElementById('header');
    var pictures = new Array('/static/media/img/bannerimages/bannerimage1.jpg','/static/media/img/bannerimages/bannerimage2.jpg','/static/media/img/bannerimages/bannerimage3.jpg','/static/media/img/bannerimages/bannerimage4.jpg','/static/media/img/bannerimages/bannerimage5.jpg','/static/media/img/bannerimages/bannerimage6.jpg','/static/media/img/bannerimages/bannerimage7.jpg','/static/media/img/bannerimages/bannerimage8.jpg',);
    var numPics = pictures.length;
    if (document.images) {
        var chosenPic = Math.floor((Math.random() * numPics));
        header.style.background = 'url(' + pictures[chosenPic] + ')';
    }
}