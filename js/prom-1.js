function sumarUno (numero, Nomcallback){

    console.log("Primer Paso" + numero);
    

    if (numero >= 5) {
        Nomcallback('Numero muy alto ... Ya parale dos rayitas');
        return;
    }
    setTimeout(() => {
        
        //return numero +1;
        // callback(numero + 1); 
        console.log("Segundo paso numero Incrementado : " + numero);
        
        Nomcallback(null,numero + 1) 
    }, 800);
    //
}
            // function(nuevoValor = Nomcallback
sumarUno(5, function(nuevoValor){

     console.log("nuevoValor : " + nuevoValor);
    sumarUno(nuevoValor, function(error,nuevoValor2){
        if(error){
            console.log(error);
            return;
        }
        console.log("nuevoValor2 : " +nuevoValor2);
        sumarUno(nuevoValor2, function name(error,nuevoValor3) {
            if(error){
                console.log(error);
                return;
            }
            console.log("nuevoValor3 : " +nuevoValor3);
            sumarUno(nuevoValor3, function name(error,nuevoValor4) {
                if(error){
                    console.log(error);
                    return;
                }
                console.log("nuevoValor4 : " +nuevoValor4);
                sumarUno(nuevoValor4, function name(error,nuevoValor5) {
                    if(error){
                        console.log(error);
                        return;
                    }
                    console.log("nuevoValor5 : " + nuevoValor5);
                    sumarUno(nuevoValor5, function name(error,nuevoValor6) {
                        if(error){
                            console.log(error);
                            return;
                        }
                        console.log("nuevoNumero6 : " + nuevoValor6);
                        sumarUno(nuevoValor6, function name(error,nuevoValor7) {
                            if(error){
                                console.log(error);
                                return;
                            } 
                            console.log("nuevoNumero7 : " + nuevoValor7);
                            
                        })
                    });
                });
            });
        });
    });
});
