$(function () {

    v1, v2, op;

    $('input[name=btn]').click(function () {
        $("#resultado").val($("#resultado").val() + $(this).val());
    });

    $('input[name=ce').click(function () {
        $('#resultado').val('');
        $('#op').text('');
    });

    $('input[name=soma').click(function () {
        if ($('#resultado').val() != '') {
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            op = "soma";
            $('#op').text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });

    $('input[name=igual').click(function () {
        if ($('#resultado').val() != '') {
            v2 = parseFloat($('#resultado').val());
            if (op == "soma") {
                $('#resultado').val(v1 + v2);
            }
            else if (op == "menos") {
                $('#resultado').val(v1 - v2);
            }
            else if (op == "vezes") {
                $('#resultado').val(v1 * v2);
            }
            else {
                $('#resultado').val(v1 / v2);
            }
        } else {
            alert('Insira um valor para efetuar o cálculo!');
        }
    });

    $('input[name=menos').click(function () {
        if ($('#resultado').val() != '') {
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            op = "menos";
            $('#op').text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });

    $('input[name=vezes').click(function () {
        if ($('#resultado').val() != '') {
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            op = "vezes";
            $('#op').text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });

    $('input[name=div').click(function () {
        if ($('#resultado').val() != '') {
            v1 = parseFloat($('#resultado').val());
            $('#resultado').val('');
            op = "div";
            $('#op').text($(this).val());
        } else {
            alert('Insira um valor para efetuar a operação!');
        }
    });

    $('input[name=igual').click(function () {
        if ($('#resultado').val() != '') {

            v2 = parseFloat($('#resultado').val());

            if (op == "menos") {
                $('#resultado').val(v1 - v2);
            }
            else if (op == "vezes") {
                $('#resultado').val(v1 * v2);
            }
            else {
                $('#resultado').val(v1 / v2);
            }
        }

        else {
            alert('Insira um valor para efetuar a operação!');
        }
    });

    $('input[name=c]').click(function () {
        var len = $("#resultado").val().length;

        var valor = $("#resultado").val();

        valor = valor.replace(valor.charAt(len - 1), "");

        $('#resultado').val(valor);
    });
});

