
//nuevas formas de ddeclarar arrays y objetos

let animales = new Array('perro','gato','pajaro','tiburon','mamut');

//sin destructuring toma muchas linaeas
let perro = animales[0];
let gato = animales[1];
let pajaro = animales[2];
let tiburon = animales[3];
let mamut = animales[4];
console.log(`${perro} --> ${gato} --> ${pajaro} --> ${tiburon} --> ${mamut}`);
//con destructuring
let animales2 = new Array('perro','gato','pajaro','tiburon','mamut');
let [perro2,gato2,pajaro2,tiburon2,mamut2] = animales2;
//otra forma
let [,,,,mamut3]=animales2;//las , son como una variable que no se cuenta
//con rest
let [perro3,...datossiguientes]=animales2;
console.log(`${perro2} <-> ${gato2} <-> ${pajaro2} <-> ${tiburon2} <-> ${mamut2}`);

//una forma mas corta
let [t,f,g,r,b] = new Array('tenis','futbol','golf','racquet','basket');
console.log(`mis deportes favoritos son ${t}, ${f}, ${g}, ${r}, ${b}`);

//con objetos
let persona = {
  "nombre":"chris",
  "edad":20,
  "sexo":"M"
};
let{nombre,edad,sexo}=persona; //tienen que ser los mismos valores que estan dentro del objeto nombre = nombre ademas en objetos deben estar entre {}
console.log(`DATOS DE LA PERSONA
nombre: ${nombre}
edad: ${edad}
sexo: ${sexo}`);

let{nombre:name,edad:age,sexo:sex /*,apellido='jimenez' se puede declara valores nuevos condatos por defecto*/}=persona; //si se quiere poner otro nombre se hace nombreenelobjeto : nuevonombre
console.log(`DATOS DE LA PERSONA
nombre: ${name}
edad: ${age}
sexo: ${sex}`);


//destructuring en objetos compluesto

let figura={
  color : "rojo",
  circulo :{
    lados:0,
    radio:3
  },
  cuadrado:{
    propiedades:{
      area:67,
      superficie:12,
      perimetro:60
    }
  }
};

let{circulo:circle}=figura;
console.log(circle); //aca obtenemos el objeto circulo
let{cuadrado:{propiedades}}=figura;//asi accedemos al objeto dentro del objeto y dentro del objetos
let{cuadrado:{propiedades:p}}=figura; //otra forma de acceder
console.log(propiedades);
console.log(p);
let{cuadrado:{propiedades:{area:a}}}=figura; //asi accedemos a una propiedes de propiedades
console.log(a);

//otra forma
p2=figura.cuadrado.propiedades;
console.log(p2);

//array con objetos

let objetos=[{numero:1,peso:2},{numero:2,altura:1.71}];
let[d1,d2]=objetos;
let[{numero:n1},{numero:n2}]=objetos;
console.log(d1);
console.log(d2);
console.log(n1);
console.log(n2);
