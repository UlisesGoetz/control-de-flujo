 function cupon (precio,cupon){

    switch(cupon){
        case 'oro':
        return  precio-(precio*.5);
        break
        case 'plata':
            return precio-(precio*.3) ;
        break
        case 'bronce':
            return  precio-(precio*.2);
        break
        default:
            
            return "No hay cupon"
            break;
    }

 }
 console.log(cupon(80,"plata"));
 