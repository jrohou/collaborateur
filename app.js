$(document).ready(function(){

  $("#btnConnecter").click(function(e){
    e.preventDefault();
    var identifiant = $('#identifiant').val();
    var mdp = $('#password').val();

    if(identifiant=="ccrossi" && mdp=="lemeilleurdesmdp") {
      window.location.href="collaboindex.html";
    }
    else {
      window.location.href="index.html";
    }


  })

});
