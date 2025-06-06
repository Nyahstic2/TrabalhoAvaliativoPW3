let stage = 1;
function continuarForm(){
    if (stage == 1){
        if(document.getElementById("senha").value == document.getElementById("senhaCon").value){
            stage = 2;
            document.getElementById("p2").removeAttribute("hidden");
            document.getElementById("p1").setAttribute("hidden", null);
            document.getElementById("RegisterStage").innerText = "Passo 2 de 2";
            document.getElementById("btnDone").innerText = "Registrar";
        }
        else{
            alert("Senhas não batem!");
        }
    }
    else{
        if (document.getElementById("cep").value == '' || document.getElementById("cep").value == undefined) alert("Insira um CEP!");
        var script = document.createElement("script");
        script.src = 'https://viacep.com.br/ws/'+ document.getElementById("cep").value +'/json/?callback=mostrarInput';
        document.body.appendChild(script);
        setTimeout(() => {script.remove()}, 500);
    }
}

function mostrarInput(conteudo){
    let text = "";
    if(!("erro" in conteudo)){
        text = "Seu CEP diz que:\nRua: " + conteudo.logradouro + " \nBairro: " + conteudo.bairro + " \nCidade: " + conteudo.localidade + " \nEstado: " + conteudo.uf;
        alert(text);
    }else{
        alert("CEP não encontrado!");
    }
}