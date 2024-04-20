var stepper = null;
$(document).ready(function () {


    $("#btn_solicitar").click(function (event) {
        
        event.preventDefault()

        var mensaje = "";

        var txt_desde_index = $("#txt_desde_index").val();
        var txt_hasta_index = $("#txt_hasta_index").val();
        var txt_celular_index = $("#txt_celular_index").val();
        var txt_fecha_hora_index = $("#txt_fecha_hora_index").val();

        
        if (!txt_desde_index) {
            mensaje += "<li>Ingrese el campo desde.</li>"
        }

        if (!txt_hasta_index) {
            mensaje += "<li>Ingrese el campo hasta.</li>"
        }

        if (!txt_celular_index) {
            mensaje += "<li>Ingrese el campo celular.</li>"
        }

        if (!txt_fecha_hora_index) {
            mensaje += "<li>Ingrese la fecha y hora.</li>"
        }

        if (mensaje != "") {
            Swal.fire({
                title: "<strong>Información</strong>",
                icon: "info",
                html: `
                  <ul>${mensaje}</ul>
                `,
                focusConfirm: false,
                confirmButtonText: `
                  <i class="fa fa-thumbs-up"></i> Ok!
                `,
               
                cancelButtonAriaLabel: "Thumbs down"
              });
            return;
        }

    });

 

})


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
