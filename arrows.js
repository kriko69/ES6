
//funciones arrows


//funcion sin arrows
let suma = function(a,b){
  return a+b;
};

console.log(suma(5,7));
//funcion con arrows
//let functonName = (parametros) ={code...};
let suma2 = (a,b) => a+b;
console.log(suma2(4,7));

let saludo = (nombre) => `hola mucho gusto ${nombre}`;  //si en la funcion solo hay una linea de codigo no es necesario poer llaves
console.log(saludo('chris'));

let sumar3 = (...numeros) => { //si hay mas lines recien se pone llaves
  let c=0;
  for (let n of numeros) {
    c+=n;
  }
  return c;
};
console.log(sumar3(1,2,3,4));

let hola=() => "hola mundo";

let crearobjeto=(id) => ({id:id,nombre:"chris"});
function crearobjeto2(id)
{
	return {
		id : id,
		nombre : "chris"
	};
}