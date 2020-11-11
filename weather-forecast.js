let cities = document.getElementById("cities");
let image = document.getElementById("img");
let newCity;

$(document).ready(function (newCity) {
    $('#addBtn').click(function (e) {
        newCity = cities.value.trim();

        $.ajax({
            url: 'http://api.weatherstack.com/current',
            data: {
                access_key: '885c6c35d49e96bcdc2a7177dd39fac7',
                query: newCity
            },
            dataType: 'json',
            success: function (apiResponse) {
                // var items = [];
                console.log(apiResponse);
                card = $("<form class='form '><div class='card col-lg-12'><button class='btn btn-danger px-1' id='btnRemove'>X</button>" + `${apiResponse.location.name} ${apiResponse.current.temperature}` + " °C" + "</div></from>");
                card.appendTo('.form');
                var silinecekCard = `${apiResponse.location.name}`
                if (silinecekCard == newCity) {
                    $(document).ready(function (e) {
                        $('.btn-danger').click(function (e) {
                            silinecekCard.Remove();
                            console.log("silme işlemine gidiliyor", silinecekCard);

                        });
                    });

                    silinecekCard.Remove();
                }
                console.log(silinecekCard);



            }
        });
    });
});

// function cardRemove(silinecekCard){
//     // silme işlemleri
//     silinecekCard.Remove();
//     console.location("card silindi",silinecekCard);
// }


// $("", {
//     class: "card",
//     html: items.join("")
//  }).appendTo("body");