$('#wordsmall').hide();
$('#wordbig').hide();
var mot = ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"];
var nb;
var car;

function letterplacement() {
    mot = [0];
    var text = $('#word').val();
    mot = text.split('');
    for (var i = 0; i <= 12; i++) {
        var letter = mot[i];
        if (letter !== undefined) {
            var x = i + 1;
            if (mot[i] === '*') {
                $("#" + x).attr("src", "Letters/CS/CS1.jpg");
                mot[i] = "CS";
            } else {
                var lettre = letter.toUpperCase();
                $("#" + x).attr("src", "Letters/" + lettre + "/" + lettre + "1.jpg");
            }
        } else {
            var y = i + 1;
            $("#" + y).attr("src", "");
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
    } else if ($text.length > 12) {
        $('#wordbig').show();
        $('#wordsmall').hide();
    } else {
        $('#wordsmall').hide();
        $('#wordbig').hide();
    }
    var str = this.value;
    var length = this.value.length;
    var str2 = str.charAt(length - 1);
    if (/[A-Z]/.test(str2) || str2.includes("*") || /[a-z]/.test(str2)) {
    } else {
        this.value = this.value.replace(str2, "");
        return this.value;
    }
});

$('#go').click(function () {
    go()
});

$('#word').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        go()
    }
});

function go() {
    var text = $('#word').val();
    if (text.length >= 3 && text.length <= 12) {
        if (text.length === 3) {
            $('.lettres').attr("class", "col-4 lettres p-0 m-0");
            for (var i = 4; i <= 12; i++) {
                $('#' + i).hide();
            }
        } else if (text.length === 4) {
            $('.lettres').attr("class", "col-3 lettres p-0 m-0");
            $('#4').show();
            for (i = 5; i <= 12; i++) {
                $('#' + i).hide();
            }
        } else if (text.length === 5 || text.length === 6) {
            $('.lettres').attr("class", "col-2 lettres p-0 m-0");
            $('#4').show();
            $('#5').show();
            $('#6').show();
            for (i = 7; i <= 12; i++) {
                $('#' + i).hide();
            }
        } else if (text.length >= 7) {
            $('.lettres').attr("class", "col-1 lettres p-0 m-0");
            for (i = 1; i <= 12; i++) {
                $('#' + i).show();
            }
        }
        letterplacement()
    }
}

$('.couleur').click(function () {
    var couleur = $(this).attr("id");
    $('#background').css("background-image", 'url("background/' + couleur + '.jpg")');
});

$('.lettre').click(function () {
    nb = $(this).attr('id');
    car = mot[nb - 1].toUpperCase();
    for (var i = 1; i <= 5; i++) {
        $('#car' + i).attr("src", "Letters/" + car + "/" + car + i + ".jpg");
    }
    $('#choix2').modal('show');
});

$('#save').click(function () {
    for (var i = 1; i <= 5; i++) {
        var isactive = $('#div' + i).attr("class");
        if (isactive === "carousel-item active") {
            var nbcar = i;
        }
    }
    $("#" + nb).attr('src', "Letters/" + car + "/" + car + nbcar + ".jpg");
    $('#myCarousel').carousel(0);
    $('#choix2').modal('hide');
});