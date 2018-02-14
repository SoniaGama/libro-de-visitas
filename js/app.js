// traemos elementos
var $textLarge = $('#text-large'); 
var $textMedium = $('#text-medium');
var $textSmall = $('#text-small');

var $colorText = $('#color-text');
var $colorBackground = $('#color-background');

var $textLeft = $('#text-left');
var $textCenter = $('#text-center');
var $textRight = $('#text-right');

var submit = $('#submit');

var containerComment = $('#container-comment');

var userComments = $('#user-comment-text');


function loadPage (){
    submit.click(comments);
}

// funcion para pintar comentario
function comments (event) {
    event.preventDefault();
    console.log(userComments.val());  
    
}

function sixeText (){

}

function colorText() {

}

function colorBackground() {

}

function directionText () {

}

$(document).ready(loadPage);