$(document).ready(function(){
    $(".card-header").click(function(){
     // self clicking close
     if($(this).next(".card-body").hasClass("active")){
       $(this).next(".card-body").removeClass("active").slideUp()
      $(this).children("span").removeClass("fa-times").addClass("fa-plus")	
     }
   else{
     $(".card .card-body").removeClass("active").slideUp()
     $(".card .card-header span").removeClass("fa-times").addClass("fa-plus");
     $(this).next(".card-body").addClass("active").slideDown()
      $(this).children("span").removeClass("fa-plus").addClass("fa-times")
    }
    })
  })