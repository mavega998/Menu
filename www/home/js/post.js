$('#formulario').submit(function() { 
        
         
        // recolecta los valores que inserto el usuario
        var datosMesa = $("#porc").val();
        var datosPedido = $("#canH").val();
        
        archivoValidacion = "http://192.168.43.18/servidor/guarda.php?jsoncallback=?";
        $.getJSON( archivoValidacion, { usuario:datosMesa ,password:datosPedido}).done(function(respuestaServer) {
            alert(respuestaServer.respuesta);
            
            if(respuestaServer.validacion == "ok"){
              
                /// si la validacion es correcta, muestra la pantalla "home"
                $.mobile.changePage("#home");
              
            }else{
              
              /// ejecutar una conducta cuando la validacion falla
              alert(respuestaServer.validacion);

            }
      
        });
        return false;
    });


document.addEventListener('backbutton', function(e){
            if($.mobile.activePage.is('#pedidoH')){
                e.preventDefault();
            } else {
                if(confirm("¿Esta seguro que desea salir?")){
                    this.finish();
                } else {
                    return false;
                }
            }
        },false);