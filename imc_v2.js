    //função para executar o inicio da aplicação
    function iniciar() { 
        var botaoCalculaImc = document.querySelector('#botao_calcular_imc'); // variável que seleciona o botao pela id
        botaoCalculaImc.addEventListener('click', lidarClickBotao); // acessa o botão e QUANDO clicar, envia a referência da função
    
        var inputPeso = document.querySelector('#input-peso');
        var inputAltura = document.querySelector('#input-altura');
    
        inputPeso.addEventListener('input', lidarClickBotao); //dinamismo, QUANDO acessa input, acessa função lidarClickBotao
        inputAltura.addEventListener('input', lidarClickBotao); // na medida que altera o input, altera a função
        
        //já começa executando a função
        lidarClickBotao();
    }
    
    // função que calcula o imc, a parte //
    function calculaImc(peso, altura) {
        return peso / (altura * altura);
    }

    function lidarClickBotao() {
        var inputPeso = document.querySelector('#input-peso'); // seleciona o id, na documentação
        var inputAltura = document.querySelector('#input-altura'); // variável para cosultar seletor

        var peso = Number(inputPeso.value); //especifica tipo número, criamos uma variável relativa ao valor do input selecionado
        var altura = Number(inputAltura.value);

        //usando a função do imc a parte, dividindo as responsbilidades da função
        var imc = calculaImc(peso, altura);

        //para classificar o estado de saude, um paragrafo com id a parte, e suas condições com base no imc
        var resultadoFaixa = document.querySelector('#resultado_faixa');
        if(imc < 16){
            resultadoFaixa.textContent = "Faixa inválida"
        }
        if(imc >= 16 ){
            resultadoFaixa.textContent = "Muito abaixo do peso";
        }
        if(imc >= 17){
            resultadoFaixa.textContent = "Abaixo do peso";
        }
        if(imc >= 18.5){
            resultadoFaixa.textContent = "Peso normal";
        }
        if(imc >= 25){
            resultadoFaixa.textContent = "Acima do peso";
        }
        if(imc >= 30){
            resultadoFaixa.textContent = "Obesidade grau 1"
        }
        if(imc >= 35){
            resultadoFaixa.textContent = "Obesidade grau 2"
        }
        if(imc >= 40){
            resultadoFaixa.textContent = "Obesidade grau 3"
        }

        var imcFormatado = imc.toFixed(2).replace('.', ','); // formatação para 2 casas décimais e trocando o ponto por vírgula

        var imcResultado = document.querySelector('#resultado_imc');
        imcResultado.textContent = imcFormatado; // acessamos a variável com o id do resultado para escrever, atribuindo a formatação
    }
    
    iniciar();
    