$(document).ready(function(){

  $("#btnConnecter").click(function(e){
    e.preventDefault();
    var identifiant = $('#identifiant').val();
    var mdp = $('#password').val();

    if(identifiant=="ccrossi" && mdp=="lemeilleurdesmdp") {
      window.location.href="collaboindex.html";
    }
    else {

      $('#badlogin').show();
      window.location.href="index.html";
    }


  })

  $('#btnInscription').click(function(e){

    e.preventDefault();
    $('#inscrit').show();
    window.location.href="index.html";

  })

});
