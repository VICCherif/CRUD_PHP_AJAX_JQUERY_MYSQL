$(document).ready(function(){
        $("#insert").click(function(){
            var nombre = $('#nombre').val();
            var autor = $("#autor").val();
            var precio = $("#precio").val();
            var datos = "nombre=" + nombre + "&autor=" + autor + "&precio=" + precio + "&insert=";

            console.log(datos);
            if($.trim(nombre).length > 0 & $.trim(autor).length > 0 & $.trim(precio).length>0){
                $.ajax({
                    type: "POST",
                    url: "http://192.168.0.115/crud/php/insert.php",
                    data: datos,

                    success: function(data){
                        if(data == "Correcto"){
                            alert("Guardado Correctamente");
                            window.location.href = "http://192.168.0.115/crud/select.html";
                        }else{
                            alert("Error");
                        }
                    }
                });
            }
        });
    });
