jQuery(document).ready(function (){
    var api_key = '93a1875e';
    $("#btn_buscar").click(function() {
        $.get(
            "http://www.omdbapi.com",
            {
            apikey: api_key,
            r: "json",
            s: $("#pelicula").val()
        },
    function(data, status) {
        console.log(data);

        var titulo='';
        var year='';
        var imdb='';
        var poster='';

        for(var i=0;i<data.Search.length;i++){
            titulo = data.Search[i].Title;
            year = data.Search[i].Year;
            imdb = data.Search[i].imdbID;
            poster = data.Search[i].Poster;
            tipo = data.Search[i].Type;
            
            var resultado = 
            `<div class="card" style="width: 18rem;">
                <img src="`+poster+`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+titulo+` <i style="opacity: 0.7;">(`+tipo+`)</i></h5>
                    <p class="card-text">id: <i>`+imdb+`</i></p>
                    <p class="card-text">`+year+`</p>
                </div>
            </div>`;
        $('#resultado').append(resultado);
            }
        });
    });
});