// boton para enviar el text
var submit = $('#submit');

// contenedor de comentarios
var $containerComment = $('#container-comment');
var $userComments = $('#user-comment-text');
var $commentsEdit = $('#comments-edit');

//funcion que carga la página
function loadPage() {
    $('#user-comment-text').keyup(commentsEditVal); //funcion para pintar en tiempo real el comentario
    $('.change-color-text').click(changeColor); //función para cambiar el color del text
    $('.change-color-background').click(changeBackground); //funcion para cambiar el color de fondo
    $('.change-size').click(changeSizeText); //funcion para cambiar el tamaño de letra
    $('.change-direction').click(changeDirectionText); // funcion para cambiar la direccion del texto
    $('#submit').click(paintComment);
    // $('#submit').click(saveComments);
    // showComents();
}

// Espacio donde se pintan los comentarios antes de mandarlos
// var $commentsEdit = $('<p />').addClass('col-12').attr('id','comments-edit');
// $('#example-comment').append($commentsEdit);

// funcion para pintar comentario de muestra
function commentsEditVal(e) {
    e.preventDefault();
    $commentsEdit.text($userComments.val());
}

// funcion para cambiar el tamaño dle texto
function changeSizeText(e) {
    var sizeText = this.dataset.size;
    $commentsEdit[0].style.fontSize = sizeText;
}

// funcion para cambiar el color del texto
function changeColor(e) {
    var colorData = this.dataset.color;
    $commentsEdit[0].style.color = colorData;
}

// funcion para cambiar el color de fondo
function changeBackground(e) {
    var colorBackground = this.dataset.background;
    $commentsEdit[0].style.backgroundColor = colorBackground;
}

// funcion para cambiar la alineacion del texto
function changeDirectionText(e) {
    var $textDirection = this.dataset.direction;
    $commentsEdit[0].style.textAlign = $textDirection;
}

// funcion para enviar comentario
function paintComment(e) {
    e.preventDefault();
    // console.log($commentsEdit[0]);
    $commentsEdit.clone().appendTo($containerComment).removeAttr('id').addClass('newComment');
    $userComments.val('');
    $commentsEdit.text('').removeAttr('style');

}


// function saveComments() {

//     var $save = $('.newComment')
//     for (var i = 0; i < $save.length; i++) { 
//         // console.log($save[i]);
//         // console.log(commentsSave);        

//         commentsSave['new'] = $save[i];
//         console.log(commentsSave);
//     }

// }
// saveComments()

// function showComents() {
    
//     for (var i in commentsSave) {
//         var saved = commentsSave[i];
//         var sectionRow = $('<section />').addClass('row');
//         var pComment = $('<p />').addClass('col-12').text(saved);
//         pComment.append(sectionRow).append($containerComment);

//     }
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