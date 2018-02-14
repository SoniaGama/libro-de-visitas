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
var commentExample = $('#coments-example');

// textarea
var userComments = $('#user-comment-text');


function loadPage (){
    userComments.keyup(comments);
}

// Elementos para funcion comments
var $keyComment = $('<p />');
containerComment.append($keyComment);

// funcion para pintar comentario
function comments (event) {
    event.preventDefault();
    // console.log(userComments.val());  
    $keyComment.text(userComments.val());
    
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