// comentarios dummy
var $commentOne = $('#one');
var $commentTwo = $('#two');

// boton para enviar el text
var submit = $('#submit');

// Espacio donde se pintan los comentarios antes de mandarlos
var $commentsEdit = $('#comments-edit');

//funcion que carga la página
function loadPage() {
    $('#user-comment-text').keyup(commentsEditVal); //funcion para pintar en tiempo real el comentario
    $('.change-color-text').click(changeColor); //función para cambiar el color del text
    $('.change-color-background').click(changeBackground); //funcion para cambiar el color de fondo
    $('.change-size').click(changeSizeText); //funcion para cambiar el tamaño de letra
    $('.change-direction').click(changeDirectionText); // funcion para cambiar la direccion del texto
}


// funcion para pintar comentario de muestra
function commentsEditVal(e) {
    e.preventDefault();
    $commentsEdit.text($userComments.val());
}

// funcion para cambiar el tamaño dle texto
function changeSizeText() {
    var sizeText = this.dataset.size;
    $commentsEdit[0].style.fontSize = sizeText;
}

// funcion para cambiar el color del texto
function changeColor(e) {
    var colorData = this.dataset.color;
    $commentsEdit[0].style.color = colorData;
}

// funcion para cambiar el color de fondo
function changeBackground() {
    var colorBackground = this.dataset.background;
    $commentsEdit[0].style.backgroundColor = colorBackground;
}

// funcion para cambiar la alineacion del texto
function changeDirectionText() {
    var $textDirection = this.dataset.direction;
    $commentsEdit[0].style.textAlign = $textDirection;
}

// funcion para enviar comentario
function paintComment() {

}

// function commentsDummy() {    
// }



$(document).ready(loadPage);

// function changeColor(e) {
//     // console.log($commentsEdit); 
//     var colorData = this.dataset.color;     
//     $commentsEdit.each(element => {
//         console.log(element);        
//         element.style.color = $colorData;        
//     });       
// }