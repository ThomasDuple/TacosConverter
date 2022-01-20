const val_ipt = document.getElementById('ipt');
const res_ipt = document.getElementById('res');

$('#ipt').on('change textInput input', function () {
    let val = $(this).val();
    let tacos = val / 5
    console.log(val);

    $(this).css("width", ((Math.max((val).toString().length, 1) + 1) + "ch"))
    $("#res").css("width", ((Math.max(tacos.toString().length, 1) + 1) + "ch"))

    $("#res").val(tacos);

    let str = "";

    for (let i = 1; i <= Math.abs(tacos); ++i) {
        str += "🌯";
    }

    $('#full-tacos').html(str);

    if (tacos % 1 != 0) {
        $("#last-byte").css("display", "inline-block");
        $("body").get(0).style.setProperty("--last-byte-width", (Math.abs(tacos % 1) * 100) + "%");
    } else {
        $("#last-byte").hide();
    }

});