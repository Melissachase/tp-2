
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

        sucursales: ["Centro", "Caballito"],

        ventas: [
          // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
          { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
          { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
          { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro" },
          { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro" },
          { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito" },
          { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito" },
          { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
          { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito" },
          { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro" },
          { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito" },
          { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro" }
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

////////////////////////
//////  PARTE 1 ///////
///////////////////////

      /* 1. precioMaquina(componentes)**: recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, 
            que es la suma de los precios de cada componente incluido.
      
      console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)  */ 

      const precioMaquina = (componentes) => {
        let precioTotal = 0;
        componentes.forEach(componenteParametro => { 
                let componenteHallado = local.precios.find(producto => producto.componente === componenteParametro);
                if (componenteHallado != null){
                    precioTotal += componenteHallado.precio;        
                }
          });
        return precioTotal;
      } 
      //console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"])); 

      /* 2. cantidadVentasComponente(componente)**: recibe un componente y devuelve la cantidad de veces que fue vendido, 
        o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está 
        identificada por la variable `ventas`.

        console.log( cantidadVentasComponente("Monitor ASC 543") ); // 2 */
      
      const cantidadVentasComponente = (componente) => {
          let ventasComponente = local.ventas.filter(venta => venta.componentes.includes(componente));
          return ventasComponente.length;
      }
      //console.log( cantidadVentasComponente("Monitor ASC 543"));

      /* 3. vendedoraDelMes(mes, anio)**, se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la 
        vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. 
        El importe de una venta es el que indica la función `precioMaquina`. El mes es un número entero que va desde 
        el 1 (enero) hasta el 12 (diciembre).

      console.log( vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

      */

      const vendedoraDelMes = (mes, anio) => {
          const ventasPorVendedora = local.vendedoras.map(
            (vendedora) => {
                ventas = local.ventas.reduce(
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

         return ventasPorVendedora[0][0];
      }

      //console.log( vendedoraDelMes(1, 2019) );
   
      /*   4. ventasMes(mes, anio)**: Obtener las ventas de un mes. El mes es un número 
        entero que va desde el 1 (enero) hasta el 12 (diciembre).

      console.log( ventasMes(1, 2019) ); // 1250
      */

     const ventasMes = (mes, anio) => {
        const ventasMes = local.ventas.reduce(
          (acc, venta) => {
            if(venta.fecha.getMonth()==mes-1 && venta.fecha.getFullYear()==anio){
                acc+= precioMaquina(venta.componentes)
            }
            return acc;
          }
        ,0);
       return ventasMes;
    }

    //console.log( ventasMes(1, 2019) ); 

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
    //console.log( ventasVendedora("Ada") );


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
        ventasPorComponente.sort(function(a, b) {
            return b[1] - a[1];
        });

         return ventasPorComponente[0][0];

    }

   // console.log( componenteMasVendido() ); 

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

/////////////////////////
//////  PARTE 2 ////////
///////////////////////

/*  1. Crear la función **ventasSucursal(sucursal)**, que obtiene las ventas totales realizadas 
    por una sucursal sin límite de fecha.
 
    console.log( ventasSucursal("Centro") ); // 4195
*/

const ventasSucursal = (sucursal) => {
    return local.ventas.reduce(
        (acc, venta) => {
            if (venta.sucursal == sucursal){
                acc += precioMaquina(venta.componentes);
            }
            return acc;
        }
        ,0);
}

//console.log( ventasSucursal("Centro"));

/*  2. Las funciones **ventasSucursal** y **ventasVendedora** tienen mucho código en común, 
    ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, 
    ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
*/

const ventasParametro = (tipo, valor) => {
    let propiedad = ""
    return local.ventas.reduce(
        (acc, venta) => {
            switch (tipo) {
                case "vendedora": propiedad = venta.nombreVendedora;
                    break;
                case "sucursal": propiedad = venta.sucursal;
                    break;
                default: propiedad = "error";
                    break;
            }
            if (propiedad == valor){
                acc += precioMaquina(venta.componentes);
            }
            return acc;
        }
        ,0);
}
//console.log(ventasParametro("sucursal","Centro"));
//console.log(ventasParametro("vendedora","Ada"));

/* 3. Crear la función **sucursalDelMes(mes, anio)**, que se le pasa dos parámetros numéricos, 
    (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad 
    de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función 
    `precioMaquina`. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
    
    console.log( sucursalDelMes(1, 2019) ); // "Centro"
*/

const sucursalDelMes = (mes, anio) => {
    let ventasPorSucursal = local.sucursales.map(
        (sucursal) => {
            ventas = local.ventas.reduce(
                (acc, venta) => {
                    if (venta.sucursal == sucursal && venta.fecha.getMonth()==mes-1 && venta.fecha.getFullYear()==anio) {
                        acc += precioMaquina(venta.componentes);
                    }
                    return acc;
                }   
            ,0);
            return [sucursal, ventas];
        }
    )
    //console.log (ventasPorSucursal);
    ventasPorSucursal.sort(function(a, b) {
            return b[1] - a[1];
        });

    return ventasPorSucursal[0][0];
}
//console.log( sucursalDelMes(1, 2019));

/////////////////////////
//////  PARTE 3 ////////
///////////////////////

/* 1. Para tener una mejor muestra de como está resultando el local, queremos desarrollar 
    un reporte que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos 
    crear las siguientes funciones:
    renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

    console.log( renderPorMes() );
    // Ventas por mes:
    //   Total de enero 2019: 1250
    //   Total de febrero 2019: 4210
*/

const meses = [[0,"Enero"],[1,"Febrero"],[3, "Marzo"]];

const renderPorMes = () => {
    console.log("Ventas por mes:");
    for (i=0; i < meses.length; i++){
        ventas = local.ventas.reduce(
            (acc,venta) => {
                if (venta.fecha.getMonth()==meses[i][0] && venta.fecha.getFullYear()==2019){
                    acc+= precioMaquina(venta.componentes);
                }
                return acc;
            }    
        ,0);
        console.log ("Total de "+meses[i][1]+": "+ventas);
    }
}
//renderPorMes();

/*  2.renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
    console.log( renderPorSucursal() );
    // Ventas por sucursal:
    //   Total de Centro: 4195
    //   Total de Caballito: 1265
    ```
*/

const renderPorSucursal = () => {
    console.log("Ventas por Sucursal:");
    for (i=0; i < local.sucursales.length; i++){
        ventas = local.ventas.reduce(
            (acc,venta) => {
                if (venta.sucursal == local.sucursales[i]){
                    acc+= precioMaquina(venta.componentes);
                }
                return acc;
            }    
        ,0);
        console.log ("Total de "+local.sucursales[i]+": "+ventas);
    }
}
//renderPorSucursal();

/* 3. render()**: Tiene que mostrar la unión de los dos reportes anteriores, 
  cual fue el producto más vendido y la vendedora que más ingresos generó
    console.log( render() );
    // Reporte
    // Ventas por mes:
    //   Total de enero 2019: 1250
    //   Total de febrero 2019: 4210
    // Ventas por sucursal:
    //   Total de Centro: 4195
    //   Total de Caballito: 1265
    // Producto estrella: Monitor GPRS 3000
    // Vendedora que más ingresos generó: Grace        
*/

const vendedoraConMasVentas = () => {
    let ventasPorVendedora = local.vendedoras.map(
        (vendedora) =>   {
            ventas = local.ventas.reduce(
                (acc,venta) => {
                    if (venta.nombreVendedora == vendedora){
                        acc+= precioMaquina(venta.componentes);
                    }
                    return acc;
                }    
            ,0);
            return [vendedora, ventas];
        }
    )
   // console.log(ventasPorVendedora);
    ventasPorVendedora.sort(function(a, b) {
        return b[1] - a[1];
    });

     return ventasPorVendedora[0][0];
}

const render = () => {
    renderPorMes();
    renderPorSucursal();
    console.log("Producto estrella: "+componenteMasVendido());
    console.log("Vendedora que más generó: "+vendedoraConMasVentas());
}

render();