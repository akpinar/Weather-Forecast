let cities = document.getElementById("cities");
console.log("cities",cities);

$(document).ready(function(){
    $('#addBtn').click(function(e){
        const newCity = cities.value.trim();
        var card = $("<div class='card'>"+newCity+"</div>");
        // card.html(newCity + 'Derece');
        console.log("new city",newCity);
        card.appendTo('.card');
    })
})