//Leer Documentos de la base de datos
  var tablaHab = document.getElementById('tablaventas');
  db.collection("DBVentasHinnFull").onSnapshot((querySnapshot) => {
    tablaHab.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tablaHab.innerHTML += `
        <tr>
          
          <td>${doc.data().idejecutivo}</td>
          <td>${doc.data().fechareg}</td>
          <td>${doc.data().horareg}</td>

          <td>${doc.data().empresacita}</td>
          <td>${doc.data().fechacita}</td>
          <td>${doc.data().horacita}</td>
          <td>${doc.data().asuntocita}</td>
          <td>${doc.data().contactocita}</td>
          <td>${doc.data().resultadocita}</td>

          <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        </tr>
        ` 
    });
});

//Borrar Documentos
function eliminar(id){
  db.collection("DBVentasHinnFull").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}