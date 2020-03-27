jQuery(document).ready(function (){
    var resNum = 1;
    $("#btn_buscar").click(function() {
        var breed = $('#breed').val();
        var breedFix = breed.replace("-","/");
        $.get(
            "https://dog.ceo/api/breed/"+breedFix+"/images/random",
            {
            "message": "",
            "status": ""
        },
    function(data, status) {
        console.log(data);

        var dogImg = data.message;
        var dogBreed = $("#breed option:selected" ).text();
        const dogBreedUpper = dogBreed.charAt(0).toUpperCase() + dogBreed.substring(1);
            
            var resultado = 
            `<div class="card" style="width: 18rem;">
                <img src="`+dogImg+`" class="card-img-top" alt="dog">
                <div class="card-body">
                    <h5 class="card-title">`+` <i style="opacity: 0.7;">Raza:</i></h5>
                    <p class="card-text">`+dogBreedUpper+`<i></i></p>
                </div>
            </div>`;
        $('#resultado'+resNum+'').append(resultado);
        resNum+=1;
        if(resNum>3){
            resNum=1;
        }
        });
    });
});