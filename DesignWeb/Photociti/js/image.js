$('#wordsmall').hide();
$('#wordbig').hide();
var mot = ["J","A","V","A","S","C","R","I","P","T"];
var nb;
var car;

function letterplacement(){
    mot = [0];
    var text = $('#word').val();
    mot = text.split('');
    for (var i = 0; i <= 12; i++) {
        var letter = mot[i];
        if (letter !== undefined) {
            var x = i+1;
            if (mot[i] === '*') {
                $("#"+ x).attr("src", "Letters/CS/CS1.jpg");
            }
            else{
                var lettre = letter.toUpperCase();
                $("#"+ x).attr("src", "Letters/"+ lettre + "/"+ lettre + "1.jpg");
            }
        }
        else {
            var y = i+1;
            $("#"+ y).attr("src", "");
        }
    }
}
$('#word').keyup(function () {
    var $text = $('#word').val();
    $('#wordsmall').hide();
    $('#wordbig').hide();
    if ($text.length < 3) {
        $('#wordsmall').show();
        $('#wordbig').hide();
    }
    else if ($text.length > 12) {
        $('#wordbig').show();
        $('#wordsmall').hide();
    }
    else {
        $('#wordsmall').hide();
        $('#wordbig').hide();
    }
});
$('#go').click(function () {
   go()
});
$('#word').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        go()
    }
});
function go() {
    var text = $('#word').val();
    if (text.length >= 3 && text.length <=12) {
        if (text.length === 3) {
            $('.lettres').attr("class", "col-xl-4 lettres p-0 m-0");
            $('#4').hide();
            $('#5').hide();
            $('#6').hide();
            $('#7').hide();
            $('#8').hide();
            $('#9').hide();
            $('#10').hide();
            $('#11').hide();
            $('#12').hide();
        }
        else if (text.length === 4) {
            $('.lettres').attr("class", "col-xl-3 lettres p-0 m-0");
            $('#4').show();
            $('#5').hide();
            $('#6').hide();
            $('#7').hide();
            $('#8').hide();
            $('#9').hide();
            $('#10').hide();
            $('#11').hide();
            $('#12').hide();
        }
        else if (text.length === 5 || text.length === 6) {
            $('.lettres').attr("class", "col-xl-2 lettres p-0 m-0");
            $('#4').show();
            $('#5').show();
            $('#6').show();
            $('#7').hide();
            $('#8').hide();
            $('#9').hide();
            $('#10').hide();
            $('#11').hide();
            $('#12').hide();
        }
        else if (text.length >= 7) {
            $('.lettres').attr("class", "col-xl-1 lettres p-0 m-0");
            $('#4').show();
            $('#5').show();
            $('#6').show();
            $('#7').show();
            $('#8').show();
            $('#9').show();
            $('#10').show();
            $('#11').show();
            $('#12').show();
        }
        letterplacement()
    }
}
$('#blanc').click(function () {
    $('#background').css("background-image", 'url("background/blanc.jpg")');
});
$('#bleu').click(function () {
    $('#background').css("background-image", 'url("background/bleu.jpg")');
});
$('#bleuFonce').click(function () {
    $('#background').css("background-image", 'url("background/bleuFonce.jpg")');
});
$('#noir').click(function () {
    $('#background').css("background-image", 'url("background/noir.jpg")');
});
$('#gris').click(function () {
    $('#background').css("background-image", 'url("background/gris.jpg")');
});
$('#rouge').click(function () {
    $('#background').css("background-image", 'url("background/rouge.jpg")');
});
$('#rose').click(function () {
    $('#background').css("background-image", 'url("background/rose.jpg")');
});


$('.lettre').click(function () {
    nb = $(this).attr('id');
    if (mot[nb-1] === '*') {
        car = "CS";
    }
    else{
        car = mot[nb-1].toUpperCase();
    }
    $('#car1').attr("src", "Letters/"+ car + "/" + car + "1.jpg");
    $('#car2').attr("src", "Letters/"+ car + "/" + car + "2.jpg");
    $('#car3').attr("src", "Letters/"+ car + "/" + car + "3.jpg");
    $('#car4').attr("src", "Letters/"+ car + "/" + car + "4.jpg");
    $('#car5').attr("src", "Letters/"+ car + "/" + car + "5.jpg");
    $('#choix2').modal('show');
});

$('#save').click(function () {
   for (var i = 1; i <= 5; i++) {
       var isactive = $('#div' + i).attr("class");
       if (isactive === "carousel-item active") {
           var nbcar = i;
       }
   }
   $("#" + nb).attr('src', "Letters/"+ car + "/" + car + nbcar + ".jpg");
    $('#myCarousel').carousel(0);
    $('#choix2').modal('hide');
});

