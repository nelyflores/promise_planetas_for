
var planeta=document.getElementById('informacionPlaneta')
function getJSON(url){
  return new Promise(function(resolve, reject){
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url);
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4){
        resolve(JSON.parse(ajax.responseText));
      }
    }

  })
}
var planetasNuevos= [];
getJSON("data/earth-like-results.json").then(function(resultado){
for (var i = 0; i< resultado.results.length;i++){
  planetasNuevos.push(getJSON(resultado.results[i]));
  planetasNuevos[i].then(function(planeta){
    console.log(planeta);
    datosPlanetas(planeta);
  });
}
});

var plantillaPlaneta=
  '<div class="row">'+
  '<div class="col s12 m7">'+
    '<div class="card">'+
      '<div class="card-image">'+
        '<img src="static/img/descarga.jpg">'+
        '<span class="card-title">--nombre--</span>'+
      '</div>'+
      '<div class="card-content" id="informacionPlaneta">'+
        '<p></p>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';
var plantillaFinal="";

var datosPlanetas = function(planeta){

var nombreplaneta=planeta.pl_name;
console.log(nombreplaneta);
var descubrimiento=planeta.pl_disc;
console.log(descubrimiento);



    var name = document.createElement('p')
    name.innerHTML=nombreplaneta;
    document.getElementById('informacionPlaneta').appendChild(name);
}
