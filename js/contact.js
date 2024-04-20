var stepper = null;
$(document).ready(function () {

    $("#btn_pagar").click(function (event) {
        
        event.preventDefault()


        Swal.fire({
            title: "Pago realizado!",
            text: "Gracias por elegir PetMovers para el transporte de tus mascotas. ¡Estamos aquí para hacer sus viajes más fáciles y seguros!!",
            icon: "success",
            showConfirmButton: true
          });
        

    });
    
    $("#btn_return_step_one").click(irPasoUno);
    $("#btn_step_one").click(irPasoDos);
    $("#btn_step_two").click(irPasoTres);

    stepper = new Stepper($('.bs-stepper')[0]);
    stepper.to(1)

 

})


$('#confirmar_dueño').change(function() {
    var valorCheckbox = $(this).prop('checked');
    
    if (valorCheckbox) {
        $("#txt_recepcionista_mascota").prop("disabled", false);
        $("#txt_recepcionista_celular").prop("disabled", false);
    } else {
        $("#txt_recepcionista_mascota").prop("disabled", true);
        $("#txt_recepcionista_celular").prop("disabled", true);
    }

});


function irPasoUno() {
    stepper.to(1);
}

function irPasoDos() {
    stepper.to(2);
}

function irPasoTres() {
    stepper.to(3);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth' // Agrega animación de desplazamiento suave
            });
        }
    });
});

function pagar() {
    console.log("ha")
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}