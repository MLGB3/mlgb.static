$(document).ready(function( {
	alert('aloha!');
    var header = document.getElementById('header');
    var pictures = new Array('/mlgb/media/img/bannerimages/bannerimage1.jpg','/mlgb/media/img/bannerimages/bannerimage2.jpg','/mlgb/media/img/bannerimages/bannerimage3.jpg','/mlgb/media/img/bannerimages/bannerimage4.jpg','/mlgb/media/img/bannerimages/bannerimage5.jpg','/mlgb/media/img/bannerimages/bannerimage6.jpg','/mlgb/media/img/bannerimages/bannerimage7.jpg','/mlgb/media/img/bannerimages/bannerimage8.jpg',);
    var numPics = pictures.length;
    var chosenPic = Math.floor((Math.random() * numPics));
    header.style.background = 'url(' + pictures[chosenPic] + ')';
   
}));