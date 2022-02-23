function consultaCep() {
    $(".barra-progresso").show();

    var cep = document.getElementById("cep").value;
    var url = `https://viacep.com.br/ws/${cep}/json`;
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#titulo-cep").html(`CEP: ${response.cep}`);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    });
}

$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
});