$(document).ready(function () {

    let cities = document.getElementById("cities");
    let newCity;
    let i = 0;

    $('#addBtn').click(function (e) {
        i++;
        newCity = cities.value.trim();

        $.ajax({
            url: 'http://api.weatherstack.com/current',
            data: {
                access_key: '885c6c35d49e96bcdc2a7177dd39fac7',
                query: newCity
            },
            dataType: 'json',
            success: function (apiResponse) {
                card = $("<div id='card" + i + "' class='card col-lg-2 my-2 mx-2'><button class='btn btn-outline-danger px-1 text-center'  data-id=" + i + " id='btnRemove" + i + "'>sil</button><img class='card-img-top' src=" + `${apiResponse.current.weather_icons[0]}` + ">" + `${apiResponse.location.name} ${apiResponse.current.temperature}` + " °C" + "</div>");

                console.log("card ekleniyor");

                card.appendTo('.cities');
            }

        });

    });



    //    $('[id^=btnRemove').click(function(e){ id si btnremove ile başlayan button click olduğunda 

    $('body').on("click", "[id^=btnRemove]", function (e) {

        let i = $(this).data("id");

        $('#card' + i).remove();
    });

    // Tüm cardları temizleme

    $(document).ready(function (e) {

        $('#removeForm').click(function (e) {

            document.getElementById('cities').value = '';

            $(".card").remove();
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