jQuery(document).ready(function(){
    var numero;
    var operacion;
//Numeros
    $("#btn-1").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'1')
    });
    $("#btn-2").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'2')
    });
    $("#btn-3").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'3')
    });
    $("#btn-4").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'4')
    });
    $("#btn-5").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'5')
    });
    $("#btn-6").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'6')
    });
    $("#btn-7").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'7')
    });
    $("#btn-8").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'8')
    });
    $("#btn-9").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'9')
    });
    $("#btn-0").click(function(event) {
        event.preventDefault();
        let screen = $('#screen').val();
        $('#screen').val(screen+'0')
    });
//Borrado
    $("#btn-CE").click(function(event) {
        event.preventDefault();
        $('#screen').val('');
    });
    $("#btn-C").click(function(event) {
        event.preventDefault();
        $('#screen').val('');
        numero=0;
    });
    $("#btn-erase").click(function(event) {
        event.preventDefault();
        var screen = $('#screen').val();
        var cant = screen.length;
        $('#screen').val(screen.substr(0,cant-1));
    });
//Adicionales
$("#btn-negative").click(function(event) {
    event.preventDefault();
    let screen = $('#screen').val();
    if(screen.indexOf('-') != 0){
        $('#screen').val('-'+screen);
    }
});
$("#btn-point").click(function(event) {
    event.preventDefault();
    let screen = $('#screen').val();
    if(screen.indexOf('.') == -1){
        $('#screen').val(screen+'.');
    }
});
//Operaciones
    $("#btn-suma").click(function(event) {
        event.preventDefault();
        let valor = $('#screen').val();
        numero = parseFloat(valor);
        operacion = 'suma';
        $('#screen').val('')
    });
    $("#btn-resta").click(function(event) {
        event.preventDefault();
        let valor = $('#screen').val();
        numero = parseFloat(valor);
        operacion = 'resta';
        $('#screen').val('')
    });
    $("#btn-multiplicacion").click(function(event) {
        event.preventDefault();
        let valor = $('#screen').val();
        numero = parseFloat(valor);
        operacion = 'multiplicacion';
        $('#screen').val('');
    });
    $("#btn-division").click(function(event) {
        event.preventDefault();
        let valor = $('#screen').val();
        numero = parseFloat(valor);
        operacion = 'division';
        $('#screen').val('');
    });
    $("#btn-result").click(function(event) {
        event.preventDefault();
        var valor = $('#screen').val();
        if(valor!=''){
            let res=0;
        switch(operacion){
            case 'suma':
                res = numero + parseFloat(valor);
                $('#screen').val(res);
                break;
            case 'resta':
                res = numero - parseFloat(valor);
                $('#screen').val(res);
                break;
            case 'multiplicacion':
                res = numero * parseFloat(valor);
                $('#screen').val(res);
                break;
            case 'division':
                res = numero / parseFloat(valor);
                $('#screen').val(res);
                break;
            default:
                $('#screen').val('SYNTAX ERROR');

            }
        }else{
            $('#screen').val('0');
        }
    });
});