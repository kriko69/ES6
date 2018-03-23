//clases en js
//con ECMASCRIPT2016

class persona
{
  constructor(nombre='pepe',edad='35',correo='pepe.com') //en el constructor se declaran las variables del objeto, se puede poner parametros por defecto
  {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
  }
  getNombre(){ //las funciones no tienen al comienzo function
    return this.nombre;
  }
  setNombre(nombre){
    this.nombre = nombre;
  }
  getEdad(){
    return this.edad;
  }
  setEdad(edad){
    this.edad = edad;
  }
  getCorreo(){
    return this.correo;
  }
  setCorreo(correo){
    this.correo = correo;
  }
  toString(){
    return `Mi nombre es ${this.nombre} tengo ${this.edad} años  mi correo es ${this.correo}`;
  }

  static saludar() //con static creamos una funcion que puede ser utilizada sin crear un objeto
  {
    return 'hola a todos';
  }
}

let per1 = new persona('christian',20,'chris@gmail.com');
console.log(per1);
console.log(per1.nombre);
console.log(per1.edad);
console.log(per1.correo);

per1.setNombre('luis');
console.log(per1.getNombre());
per1.setEdad(28);
console.log(per1.getEdad());
console.log(per1.getCorreo());
console.log(per1.toString());

console.log(persona.saludar()); //para el static solo se define el nombre de la clase .metodostatic()

console.log(`----------------------------
ahora con herencia
----------------------------`);
//herencia

class chris extends persona
{
    constructor(nombre,edad,correo,carrera,altura)
    {
      super(nombre,edad,correo);
      this.carrera=carrera;
      this.altura=altura;
    }

    toString()
    {
      return `${super.toString()} //con interpolacion podemos llamar a metodos del padre
carrera: ${this.carrera}
altura: ${this.altura}`;
    }

}

let c = new chris('christian',20,'kriko.com','sistemas',1.71);
console.log(c.toString());


//getter y setter

class auto
{
  constructor(marca,modelo,colorauto)
  {
    this.marca=marca;
    this.modelo=modelo;
    this.colorauto=colorauto;
  }
  get marca()
  {
    return this._marca;
  }
  set marca(marca)
  {
    this._marca=marca;
  }
  get modelo()
  {
    return this._modelo;
  }
  set modelo(modelo)
  {
    this._modelo=modelo;
  }
  get colorauto()
  {
    return this._colorauto;
  }
  set colorauto(colorauto)
  {
    this._colorauto=colorauto;
  }
}

let clasico= new auto("ford",2006,"negro");
console.log(clasico);
clasico.modelo=2017;
clasico.marca='toyota';
console.log(clasico);
console.log(clasico.colorauto);

let mifuncion='saludar';

class forma {
  constructor() {
  }
  [mifuncion](){ //asi ponemos una variable de afuera como nombre de una funcion de la clase

  }
}
let f = new forma();
console.log(f);
