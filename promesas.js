//para predecir una accion si algo sale bien o mal
//en pocas es para reducir codigo del setTimeout() clasico

//sin promesas
function saludar(){
  console.log('hola mucho gusto');
  setTimeout(bien,2000);
}

function bien(){
  console.log('todo salio bien');
}

saludar();


// con promesas del es6
function saludar2()
{
  return new Promise(function(resolve,reject){ //retornamos una promesa y creamos la promesa con new
    // su parametro es una function que contiene dos subfunciones resolve y reject se escriben asi por standar pero puede ser cualquier nombre
    console.log('hola mucho gusto');
    setTimeout(reject,2000); //aca dentro ponemos el setTimeout y la funcion que qeuramos utilizar
  });
}
// ahora a la hora de llamar la function con then(funcion si sale bien,funcion si sale mal)
// ponemos que queremos que haga cada una de estas funciones then(function(){}, function(){})
//                                                                  resolve   ,  reject
saludar2().then(function(){
  console.log('todo salio bien');
},
function(){
  console.log(`todo salio mal`);
});
