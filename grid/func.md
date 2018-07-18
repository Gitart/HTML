function actualizar(id){
  // Quita el modal
  $('.bs-modal').modal('hide');
  // Ajax que actualiza la base de datos y en success se edita la fila
  $.ajax({
        type: 'post',
        url: 'archivo_actualizar.php',
        dataType: 'json',
        data: { 'id' : id},
        // Regresa json con datos
        success: function (data) {
        // Cambia el 2 por la columna que quieres editar
          $('#tabla_DataTable').dataTable().fnUpdate(data.campo_bd , $('tr#'+id)[0], 2 );

        }
    });
