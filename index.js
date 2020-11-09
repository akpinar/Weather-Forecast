$(document).ready(function(){
    $('#btn').click(function(e){
       var element = $("<div class = 'inner'> </div>");
       element.appendTo('.outer');
    });
});