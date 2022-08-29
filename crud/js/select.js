    $(document).ready(function(){
       var url = "http://192.168.0.115/crud/php/select.php";
       $.getJSON(url, function(result){
        $.each(result, function(i, campo){
            var id = campo.id;
            var nombre = campo.nombre;
            var autor = campo.autor;
            var precio = campo.precio;
            $("tbody").append("<tr><td>" + nombre + "</td><td>" + autor + "</td><td>"+ precio + "</td><td><a class='btn btn-info' href='edit.html?id=" + id + "&nombre="+ nombre +"&autor="+ autor + "&precio="+ precio + "'><i class='material-icons'>mode_edit</i></td></tr>");
        })
       });
    });
