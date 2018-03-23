const minombre='christian'; //con const creamos una variable predefinida fija y no podemos cambiar su valor
//esto minombre='luis'; dara error porque no es posible cambiar
console.log(minombre);
let mensaje='hola'; //con let creamos una variable como var pero podemos volver a declerar con el mismo nombre
//si creamos 2 o mas lets con el mismo nombre al transformar se crea otra variable distinta
console.log(mensaje);
if(true) //dentro de este if (y solo dentro) mensaje = adios
{
  let mensaje='adios';
  console.log(mensaje);
}
//aca mensaje = hola
console.log(mensaje);
mensaje='me cambie';
//aca mensaje = me cambie
console.log(mensaje);
for(let i=0;i<2;i++)//dentro de este for (y solo dentro) mensaje = hola+i
{
  let mensaje='hola'+i;
  console.log(mensaje);
}
//aca mensaje = me cambie


//mapas
let auto = new Map();
auto.set("marca","toyota");
auto.set("color","rojo");
auto.set("modelo",2016);
console.log(auto);
console.log(auto.has('color'));
console.log(auto.get('modelo'));
console.log(auto.size);
auto.delete('color');
console.log(auto);


//sets

//conjuntos de valores unicos

let perros = new Set();
perros.add('chiuaua');
perros.add('pastor');
perros.add('pastor'); //no hacepta valores repètidos
console.log(perros);
console.log(perros.has('chiuaua')); //con has verificamos si un valor exste en el set (boolean)
console.log(perros.size); //size dice el tamaño del sets
perros.delete('pastor'); //eliminamos un valor determinado
console.log(perros);
perros.add('husky');
for (let perrito of perros)  //recorremos el set
{
    console.log(perrito);
}
