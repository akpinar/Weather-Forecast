let cities = document.getElementById("cities");
console.log("cities",cities);

$(document).ready(function(){
    $('#addBtn').click(function(e){
        const newCity = cities.value.trim();
        var card = $("<div class='card'>"+newCity+"</div>");
        // card.html(newCity + 'Derece');
        console.log("new city",newCity);
        card.appendTo('.card');
    });
});

// $.getJSON("https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=ankara/oEyw9kmfsMOpJ8VZfdXk1:2Nqz8Zi0qhk5NJv0BKOQg4", function(data){
//     var items =[];
//     $.each(data,function(key,val){
//         items.push("<div class='card'>"+newCity+"</div>");
//     });
//     $("",{
//         "class":"card",
//         html: items.join("")
//     }).appendTo("body");
//     console.log(data);
// });
$.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("content-type", "application/json");
        request.setRequestHeader("authorization", " oEyw9kmfsMOpJ8VZfdXk1:2Nqz8Zi0qhk5NJv0BKOQg4");
    },
    dataType: "json",
    url: "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=ankara",
    success: function(data) {
         var items =[];
        $.each(data,function(key,val){
             items.push("<div class='card'>"+newCity+"</div>");
            });
         $("",{
           "class":"card",
             html: items.join("")
           }).appendTo("body");
          console.log(data);    }
    });

