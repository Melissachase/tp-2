
/* 

Trabajo Práctico 2 - JS

## Local de ventas de PCs

Una empresa de venta de computadoras está desarrollando un sistema para llevar registro de ventas. Para ello cuenta con la siguiente información:

  * Lista de las vendedoras de la empresa
  * Lista de ventas. Un array con objetos. Cada objeto representa una venta y tiene las propiedades `fecha`, `nombreVendedora` (un String con el nombre), `componentes` (un array Strings con el nombre de cada componente vendido).
  * Lista de precios de los componentes, de la forma (nombre componente, precio).

  */

////////////////////////
//////  SOLUCION //////
///////////////////////

    var local = {
        vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
      
        ventas: [
          // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
          { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
          { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
          { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
          { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
          { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
        ],
      
        precios: [
          { componente: "Monitor GPRS 3000", precio: 200 },
          { componente: "Motherboard ASUS 1500", precio: 120 },
          { componente: "Monitor ASC 543", precio: 250 },
          { componente: "Motherboard ASUS 1200", precio: 100 },
          { componente: "Motherboard MZI", precio: 30 },
          { componente: "HDD Toyiva", precio: 90 },
          { componente: "HDD Wezter Dishital", precio: 75 },
          { componente: "RAM Quinston", precio: 110 },
          { componente: "RAM Quinston Fury", precio: 230 }
        ]
      };

      // ****** PARTE 1 ******

      /* 1. precioMaquina(componentes)**: recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, 
            que es la suma de los precios de cada componente incluido.
      
      console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)  */ 

      const precioMaquina = (componentes) => {
        let precioTotal = 0;
        componentes.forEach(componenteParametro => { 
                let componenteHallado = local.precios.find(producto => producto.componente === componenteParametro);
                if (componenteHallado != null){
                    precioTotal = precioTotal + componenteHallado.precio;        
                }
          });
        return precioTotal;
      } 
      //console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); 

      /* 2. cantidadVentasComponente(componente)**: recibe un componente y devuelve la cantidad de veces que fue vendido, 
        o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está 
        identificada por la variable `ventas`.

        console.log( cantidadVentasComponente("Monitor ASC 543") ); // 2 */
      
      const cantidadVentasComponente = (componente) => {
          let ventasComponente = local.ventas.filter(venta => venta.componentes.includes(componente));
          return ventasComponente.length;
      }
      //console.log( cantidadVentasComponente("Monitor ASC 5433"));

      /* 3. vendedoraDelMes(mes, anio)**, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la 
        vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. 
        El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde 
        el 1 (enero) hasta el 12 (diciembre).

      console.log( vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

      */

      const vendedoraDelMes = (mes, anio) => {
          const ventasPorVendedora = local.vendedoras.map(
            (vendedora) => {
                let ventas = local.ventas.reduce(
                    (acc, venta) => {
                        if (venta.fecha.getMonth()==mes-1 && venta.fecha.getFullYear()==anio && venta.nombreVendedora == vendedora){
                            acc += precioMaquina(venta.componentes) 
                        }
                        return acc;
                    }
                ,0);
                return [vendedora, ventas]
            }
          )
          ventasPorVendedora.sort(function(a, b) {
            return b[1] - a[1];
          });
          //console.log(ventasPorVendedora);
          return ventasPorVendedora[0][0];
      }

      //console.log(vendedoraDelMes(1, 2019));
   
      /*   4. ventasMes(mes, anio)**: Obtener las ventas de un mes. El mes es un número 
        entero que va desde el 1 (enero) hasta el 12 (diciembre).

      console.log( ventasMes(1, 2019) ); // 1250
      */

     const ventasMes = (mes, anio) => {
        let ventasMes = local.ventas.reduce(
          (acc, venta) => {
            if(venta.fecha.getMonth()==mes-1 && venta.fecha.getFullYear()==anio){
                acc+= precioMaquina(venta.componentes)
            }
            return acc;
          }
        ,0);
       return ventasMes;
    }

   // console.log( ventasMes(1, 2019) ); 

    /*  5. ventasVendedora(nombre)**: Obtener las ventas totales realizadas por una vendedora sin 
    límite de fecha.

      console.log( ventasVendedora("Grace") ); // 900
    */

   const ventasVendedora = (nombre) => {
    const ventasVendedora = local.ventas.reduce(
      (acc, venta) => {
        if(venta.nombreVendedora == nombre){
            acc+= precioMaquina(venta.componentes)
        }
        return acc;
      }
    ,0);
   return ventasVendedora;
    }
    //console.log( ventasVendedora("Grace") );


    /*  6. componenteMasVendido()**: Devuelve el nombre del componente que más ventas tuvo 
    historicamente. El dato de la cantidad de ventas es el que indica la función 
    `cantidadVentasComponente`
      console.log( componenteMasVendido() ); // Monitor GPRS 3000
    */

    const componenteMasVendido = () => {
        let ventasPorComponente = local.precios.map(
            (lista) =>   {
                return [lista.componente, cantidadVentasComponente(lista.componente)];
            }
        )
        console.log(ventasPorComponente);
        ventasPorComponente.sort(function(a, b) {
            return b[1] - a[1];
        });

         return ventasPorComponente[0][0];

    }

   //console.log( componenteMasVendido() ); 

   /* 7. huboVentas(mes, anio)**: que indica si hubo ventas en un mes determinado. 
    El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
      console.log( huboVentas(3, 2019) ); // false
    */

    const huboVentas = (mes, anio) => {
        let huboVentas = local.ventas.reduce(
            (acc, venta) => {
              if(venta.fecha.getMonth()==mes-1 && venta.fecha.getFullYear()==anio){
                  acc = true;
              }
              return acc;
            }
          ,false);
        return huboVentas;
    }

  //console.log( huboVentas(2, 2019));