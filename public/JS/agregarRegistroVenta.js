//Agregar documentos a la base de datos
function guardarregistroventas(){
  //Se declaran las variables, 
  //ejemplo: var variable = document.getElementById('id del input del checklisthabitaciones.html').value;
    var ideje = document.getElementById('idejecutivo').value;
    var fechain = document.getElementById('fechainput').value;
    var horain = document.getElementById('horainput').value;

    var empresac = document.getElementById('empresainput').value;
    var fechac = document.getElementById('fechainputcita').value;
    var horac = document.getElementById('horainputcita').value;
    var asuntoc = document.getElementById('asuntoinputcita').value;
    var contactoc = document.getElementById('contactoinputcita').value;
    var resultadoc = document.getElementById('resultadoinputcita').value;

    //Agrega el documento con los campos y las variables dereferencia, 
    //ejemplo: nombre: variable / nombrecompleto es el campo de la base de datos y nombrec es la variable
    db.collection("DBVentasHinnFull").add({
      idejecutivo: ideje,
      fechareg: fechain,
      horareg: horain,
    
      empresacita: empresac,
      fechacita: fechac,
      horacita: horac,
      asuntocita: asuntoc,
      contactocita: contactoc,
      resultadocita: resultadoc
    })
    .then(function(docRef) {

      ocultarbtnEnviar();

      console.log("Document written with ID: ", docRef.id);
      document.getElementById('enviado').innerHTML=
    `<p>¡Enviado correctamente!
    <button type="button" class="btn btn-outline-info" id="btnRecargar" onclick="location.reload()">Nuevo Registro</button>
    `;

    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    function ocultarbtnEnviar() {
      document.getElementById('btnEnviar').style.display="none";
    }
}


  