let noir = 0;
let gold = 0;
let blanc = 0;
const noirprix = 22.95;
const blancprix = 22.95;
const orprix = 41.85;

$('#addnoir').click(function () {
    noir++;
    $('#nbcafenoir').val(noir);
});
$('#addgold').click(function () {
    gold++;
    $('#nbcafeor').val(gold);
});
$('#addblanc').click(function () {
    blanc++;
    $('#nbcafeblanc').val(blanc);
});

$('.cart').click(function () {
    reload();
    $('#panier').modal('show');
});

$('#buttonsend').click(function () {
    location.reload();
});

$('#continuer').click(function () {
    $('#panier').modal('hide');
});

function reload() {
    noir = $('#nbcafenoir').val();
    gold = $('#nbcafeor').val();
    blanc = $('#nbcafeblanc').val();
    if (noir === "0" || noir === "") {
        $('#sacnoir').hide();
    }
    else {
        $('#sacnoir').show();
    }
    if (gold === "0" || gold === "") {
        $('#sacgold').hide();
    }
    else {
        $('#sacgold').show();
    }
    if (blanc === "0" || blanc === "") {
        $('#sacblanc').hide();
    }
    else {
        $('#sacblanc').show();
    }
    let black = Math.round(noirprix * noir *100)/100;
    let white = Math.round(blancprix * blanc *100)/100;
    let or = Math.round(orprix * gold *100)/100;
    let total = black + white + or;
    if (total === 0 || total === null){
        $('#nothing').show();
    }
    else {
        $('#nothing').hide();
    }
    $('#prixnoir').html(black + "$");
    $('#prixor').html(or + "$");
    $('#prixblanc').html(white + "$");
    $('#soustotal').html("Sous-total : " + Math.round(total *100)/100 + "$");
    $('#tps').html("TPS : " + Math.round(total * 0.05 *100)/100 + "$");
    $('#tvq').html("TVQ : " + Math.round(total * 0.09975 *100)/100 + "$");
    $('#total').html("Total : " + Math.round(total * 1.14975 *100)/100 + "$");
}
$('.counter').click(function () {
    reload();
});