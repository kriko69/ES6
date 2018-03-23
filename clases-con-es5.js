
function Persona (nombre) //declaramos una clase como una funcion, los parametros son los atributos de la clase
{
  this.nombre=nombre; //con this definimos los atributos si se llaman igual
  this.despedir=function(){ //se puede crear funciones
    return `chau ${this.nombre}!!!!`;
  }
}


Persona.prototype.saludar = function () { //con prototype se agrega una funcion a la clase si es que se quisira expander
  return `hola ${this.nombre}`;
};
Persona.prototype.edad = 20; //tambien se puede agregar variables a la clase
Persona.prototype.dameedad = function () {
  return `su edad es ${this.edad}`;
};
let ch = new Persona('chris');
console.log(ch.saludar());
console.log(ch.despedir());
console.log(ch.dameedad());
