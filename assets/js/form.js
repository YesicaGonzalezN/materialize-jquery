// INPUT SELECT GENDER
$(document).ready(() => {
    $('select').formSelect();
});

//FUNCTION EMAIL VALIDATION
function validateEmail(email) {
    let regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9-]{2,4})+$/;
    return regEx.test(email);
}

//FUNCTION TEL VALIDATION
function validateTel(tel) {
    let patron = new RegExp(/^[0-9-+]+$/);
    return patron.test(tel);
}

$('#radioError').hide();

//FORM VALIDATION
$('#btn-submit').click(function (e) {
    e.preventDefault();

    //VARIABLES
    let nameReq = '';
    let emailReq = '';
    let telReq = '';
    let textareaReq = '';
    let nameErrorMessage = '';
    let telErrorMessage = '';
    let emailErrorMessage = '';
    let checkErrorMessage = '';
    let selectErrorMessage = '';
    let textareaErrorMessage = '';
    let radioErrorMessage = '';

    //NAME VALIDATION
    let nombre = $('#nombre').val().trim();

    if ($('#nombre').val() == "") {
        nameReq = "Por favor, ingresa tu nombre.";
        $('#nameReq').html(nameReq);
    }
    if (nombre.length < 3) {
        nameErrorMessage = "El campo nombre debe tener mas de 3 carácteres.";
        $('#nameError').html(nameErrorMessage);
    }
    if (nombre.length >= 3) {
        $('#nombreResult').text(`Tu nombre es: ${nombre}`);
    }

    //SHOW ERROR MESSAGE
    if (nameReq != '') {
        $('#nameReq').show();
        $('#nameError').hide();
    } else if (nameErrorMessage != '') {
        $('#nameReq').hide();
        $('#nameError').show();
    } else {
        $('#nameError').hide();
        $('#nameReq').hide();
    }

    //EMAIL VALIDATION
    let email = $('#email').val().trim();
    if ($('#email').val() == "") {
        emailReq = "Por favor, ingresa tu email.";
        $('#emailReq').html(emailReq);
    }
    if (validateEmail($("#email").val()) == false) {
        emailErrorMessage = "Tu email no es válido.";
        $('#emailError').html(emailErrorMessage);
    }
    if (validateEmail($("#email").val()) == true) {
        $('#emailResult').text(`Tu email es: ${email}`);
    }

    //SHOW ERROR MESSAGE
    if (emailReq != '') {
        $('#emailReq').show();
        $('#emailError').hide();
    } else if (emailErrorMessage != '') {
        $('#emailReq').hide();
        $('#emailError').show();
    } else {
        $('#emailError').hide();
        $('#emailReq').hide();
    }

    //TEL VALIDATION
    let tel = $('#tel').val().trim();

    if ($('#tel').val() == "") {
        telReq = "Por favor, ingresa tu número telefónico.";
        $('#telReq').html(telReq);
    }

    if (tel.length < 5) {
        telErrorMessage = "El campo teléfono debe tener mas de 5 carácteres.";
        $('#telError').html(telErrorMessage);
    }

    if (!validateTel(tel)) {
        telErrorMessage = "El campo teléfono debe contener solo números.";
        $('#telError').html(telErrorMessage);
    }
    if (validateTel($("#tel").val()) == true && tel.length > 5) {
        $('#telResult').text(`Tu teléfono es: ${tel}`);
    }

    //SHOW ERROR MESSAGE
    if (telReq != '') {
        $('#telReq').show();
        $('#telError').hide();
    } else if (telErrorMessage != '') {
        $('#telReq').hide();
        $('#telError').show();
    } else {
        $('#telError').hide();
        $('#telReq').hide();
    }

    //CHECKBOX VALIDATION
    if ($('#check').prop('checked') == false) {
        checkErrorMessage = "Debe aceptar nuestros Términos & Condiciones.";
        $('#checkError').html(checkErrorMessage);
    }

    //SHOW ERROR MESSAGE
    if (checkErrorMessage != '') {
        $('#checkError').show();
    } else {
        $('#checkError').hide();
    };

    //SELECT VALIDATION
    let opcion = $('#select').val();

    if (opcion == "genero") {
        selectErrorMessage = "La opción género no es válida.";
        $('#selectError').html(selectErrorMessage);
    }

    if (opcion != "genero") {
        $('#selectResult').text(`Opción elegida: ${opcion}`);
    }

    //SHOW ERROR MESSAGE
    if (selectErrorMessage != '') {
        $('#selectError').show();
    } else {
        $('#selectError').hide();
    };

    // RADIO BUTTON VALIDATION
    $('#radioError').hide();

    let radioButton = $('input:checked').length;

    if (radioButton) {
        $('#radioReq').text(`Opción elegida: ${$('input:checked').attr('value')}`);
    } else {
        $('#radioError').show();
    }

    //TEXTAREA VALIDATION
    let textarea = $('#textarea1').val().trim();

    if ($('#textarea1').val() == "") {
        textareaReq = "Por favor, escribe un mensaje.";
        $('#textareaReq').html(textareaReq);
    }
    if (textarea.length < 10) {
        textareaErrorMessage = "El campo textarea debe tener mas de 10 carácteres.";
        $('#textareaError').html(textareaErrorMessage);
    }

    //SHOW ERROR MESSAGE
    if (textareaReq != '') {
        $('#textareaReq').show();
        $('#textareaError').hide();
    } else if (textareaErrorMessage != '') {
        $('#textareaReq').hide();
        $('#textareaError').show();
    } else {
        $('#textareaError').hide();
        $('#textareaReq').hide();
    }

    //SHOW SUCCES MESSAGE
    if (nameErrorMessage == '' && emailErrorMessage == '' && telErrorMessage == '' && checkErrorMessage == '' && selectErrorMessage == '' && textareaErrorMessage == '') {
        $('.modal').modal();
    }

    //SERIALIZE
    let datos = $('#form-contact').serialize();
    console.log(datos);
})