$(document).ready(function(){
        var id = decodeURI(getUrlVal()["id"]);
        var nombre = decodeURI(getUrlVal()["nombre"]);
        var autor = decodeURI(getUrlVal()["autor"]);
        var precio = decodeURI(getUrlVal()["precio"]);

        $("#id").val(id);
        $("#nombre").val(nombre);
        $("#autor").val(autor);
        $("#precio").val(precio);

        $("#update").click(function(){
            var id = $('#id').val();
            var nombre = $('#nombre').val();
            var autor = $("#autor").val();
            var precio = $("#precio").val();
            var datos = "id=" + id + "&nombre=" + nombre + "&autor=" + autor + "&precio=" + precio + "&update=";

            console.log(datos);
       
                $.ajax({
                    type: "POST",
                    url: "http://192.168.0.115/crud/php/update.php",
                    data: datos,

                    success: function(data){
                        if(data == "Correcto"){
                            alert("Actualizado Correctamente");
                            window.location.href = "http://192.168.0.115/crud/select.html";
                        }else{
                            alert("Error");
                        }
                    }
                });
           
        });
            $("#delete").click(function() {
            var id = $("#id").val();
            var datos = "id=" + id + "&delete=";
            $.ajax({
                type: "GET",
                url: "http://192.168.0.115/crud/php/delete.php",
                data: datos,
                success: function(data) {

                    if (data == "Correcto") {
                        alert("Eliminado correctamente");   
                        window.location.href = "http://192.168.0.115/crud/select.html";          
                    } else if (data == "Error") {
                        alert("Error");
                    }
                }
            });

        });
    });
