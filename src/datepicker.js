    
$(function(){
    $('#date #datepincker').datepicker({
        'locale': 'nl',
        'language': 'nl',
        timepicker : false,
        format : "dd/mm/yyyy",
        monthNames: ["Enero", 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', "Diciembre"],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', "Dic"],
        dayNamesMin: [ "Dom","Lun","Mar","Mie","Jue","Vie","Sáb" ],
        autoclose : true ,
        showMeridian: true,
        todayBtn: true,
    }),
    $(document).ready(function(){
        $("#buton").click(function(){
          alert("The paragraph was clicked.");
        });
      });
})