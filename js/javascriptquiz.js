function mudar(){
    document.getElementById("botaoiniciar").style.display = 'none'
    document.getElementById("caixa").innerHTML = '<p class="scale-bounce" id="enunciado">Qual o nome dado a dupla de ataque rubro-negra formada por Adriano e Vagner Love no ano de 2009?</p><br><p class="scale-bounce"><label><input id="1"class="with-gap" name="group3" type="radio"/><span>Império do amor</span></label></p><p class="scale-bounce"><label><input id="2"class="with-gap" name="group3" type="radio" /><span>Reinado Rubro-Negro</span></label></p><p class="scale-bounce"><label><input id="3" class="with-gap" name="group3" type="radio"  /><span>Trem bala da colina</span></label></p><a onclick="responder()" class="waves-effect waves-light btn" >enviar</a>'
    document.getElementById("enunciado").style.marginLeft ="20px"
    document.getElementById("enunciado").style.fontSize = "17px"
    document.getElementById("titulo").innerHTML = '1/5'
    document.getElementById("titulo").style.textAlign = 'center'

    
}
var list = []
function responder() {
    if(document.getElementById("1").checked == true ){
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojesim.mp3" type="audio/mpeg"></audio> CERTO!!!!', classes: 'rounded'});
    }else{
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojenao.mp3" type="audio/mpeg"></audio> ERRADO!!!!', classes: 'rounded'});
    }
    if(document.getElementById("1").checked == true){
        list.push("Império do amor")
        localStorage.setItem("respostas", list)
    }else if(document.getElementById("2").checked == true){
        list.push("Reinado rubro negro")
        localStorage.setItem("respostas", list)
    }else{
        list.push("Trem bala da colina")
        localStorage.setItem("respostas", list)
    }

    document.getElementById("caixa").innerHTML = '<p class="scale-bounce" id="enunciado">Quantos titulos o flamengo ganhou em 2019?</p><br><p class="scale-bounce"><label><input id="4"class="with-gap" name="group3" type="radio"/><span>4</span></label></p><p class="scale-bounce"><label><input id="5"class="with-gap" name="group3" type="radio" /><span>5</span></label></p><p class="scale-bounce"><label><input id="6" class="with-gap" name="group3" type="radio"  /><span>3</span></label></p><a onclick="responder1()" class="waves-effect waves-light btn">enviar</a>'
    document.getElementById("linha").style.width = "20%"
    document.getElementById("titulo").innerHTML = '2/5'
    document.getElementById("enunciado").style.marginLeft ="20px"
    document.getElementById("enunciado").style.marginRight ="20px"
    document.getElementById("enunciado").style.fontSize = "17px"
    document.getElementById("titulo").style.textAlign = 'center'

    
}

function responder1(){
    if(document.getElementById("6").checked == true ){
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojesim.mp3" type="audio/mpeg"></audio> CERTO!!!!', classes: 'rounded'});
    }else{
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojenao.mp3" type="audio/mpeg"></audio> ERRADO!!!!', classes: 'rounded'});
    }
    if(document.getElementById("4").checked == true){
        list.push("4")
        localStorage.setItem("respostas", list)
    }else if(document.getElementById("5").checked == true){
        list.push("5")
        localStorage.setItem("respostas", list)
    }else{
        list.push("3")
        localStorage.setItem("respostas", list)
    }

    document.getElementById("caixa").innerHTML =   '<p class="scale-bounce" id="enunciado">Em qual ano o Flamengo foi fundado?</p><br><p class="scale-bounce"><label><input id="7"class="with-gap" name="group3" type="radio"/><span>1915</span></label></p><p class="scale-bounce"><label><input id="8"class="with-gap" name="group3" type="radio" /><span>1895</span></label></p><p class="scale-bounce"><label><input id="9" class="with-gap" name="group3" type="radio"  /><span>1925</span></label></p><a onclick="responder2()" class="waves-effect waves-light btn">enviar</a>'
    document.getElementById("linha").style.width = "40%"
    document.getElementById("titulo").innerHTML = '3/5'
    document.getElementById("enunciado").style.marginLeft ="20px"
    document.getElementById("enunciado").style.fontSize = "17px"
    document.getElementById("titulo").style.textAlign = 'center'
}

function responder2(){
    if(document.getElementById("8").checked == true ){
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojesim.mp3" type="audio/mpeg"></audio> CERTO!!!!', classes: 'rounded'});
    }else{
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojenao.mp3" type="audio/mpeg"></audio> ERRADO!!!!', classes: 'rounded'});
    }
    if(document.getElementById("7").checked == true){
        list.push("1915")
        localStorage.setItem("respostas", list)
    }else if(document.getElementById("8").checked == true){
        list.push("1895")
        localStorage.setItem("respostas", list)
    }else{
        list.push("1925")
        localStorage.setItem("respostas", list)
    }

    document.getElementById("caixa").innerHTML =   '<p class="scale-bounce" id="enunciado">Qual o Jogador fez 3 gols no jogo contra o goias, que terminou 6X1 para o Flamengo pelo Brasileirão 2019?</p><br><p class="scale-bounce"><label><input id="10"class="with-gap" name="group3" type="radio"/><span>Arrascaeta</span></label></p><p class="scale-bounce"><label><input id="11"class="with-gap" name="group3" type="radio" /><span>Bruno Henrique</span></label></p><p class="scale-bounce"><label><input id="12" class="with-gap" name="group3" type="radio"  /><span>Gabigol</span></label></p><a onclick="responder3()" class="waves-effect waves-light btn">enviar</a>'
    document.getElementById("linha").style.width = "60%"
    document.getElementById("titulo").innerHTML = '4/5'
    document.getElementById("enunciado").style.marginLeft ="20px"
    document.getElementById("enunciado").style.fontSize = "17px"
    document.getElementById("titulo").style.textAlign = 'center'
}
function responder3(){
    if(document.getElementById("10").checked == true ){
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojesim.mp3" type="audio/mpeg"></audio> CERTO!!!!', classes: 'rounded'});
    }else{
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojenao.mp3" type="audio/mpeg"></audio> ERRRADO!!!!', classes: 'rounded'});
    }
    if(document.getElementById("10").checked == true){
        list.push("Arrascaeta")
        localStorage.setItem("respostas", list)
    }else if(document.getElementById("11").checked == true){
        list.push("Bruno Henrique")
        localStorage.setItem("respostas", list)
    }else{
        list.push("Gabigol")
        localStorage.setItem("respostas", list)
    }

    document.getElementById("caixa").innerHTML =   '<p class="scale-bounce" id="enunciado">Qual jogador usa a camisa 10 do Flamengo em 2020?</p><br><p class="scale-bounce"><label><input id="13"class="with-gap" name="group3" type="radio"/><span>Diego</span></label></p><p class="scale-bounce"><label><input id="14"class="with-gap" name="group3" type="radio" /><span>Arrascaeta</span></label></p><p class="scale-bounce"><label><input id="15" class="with-gap" name="group3" type="radio"  /><span>Gerson</span></label></p><a onclick="resultado()" class="waves-effect waves-light btn">enviar</a>'
    document.getElementById("linha").style.width = "80%"
    document.getElementById("titulo").innerHTML = '5/5'
    document.getElementById("enunciado").style.marginLeft ="20px"
    document.getElementById("enunciado").style.fontSize = "17px"
    document.getElementById("titulo").style.textAlign = 'center'
}
function resultado(){
    if(document.getElementById("13").checked == true ){
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojesim.mp3" type="audio/mpeg"></audio> CERTO!!!!', classes: 'rounded'});
    }else{
     M.toast({html: '<audio autoplay controls style="display: none"><source src="audio/hojenao.mp3" type="audio/mpeg"></audio> ERRADO!!!!', classes: 'rounded'});
    }
    if(document.getElementById("13").checked == true){
        list.push("Diego")
        localStorage.setItem("respostas", list)
    }else if(document.getElementById("14").checked == true){
        list.push("Arrascaeta")
        localStorage.setItem("respostas", list)
    }else{
        list.push("Gerson")
        localStorage.setItem("respostas", list)
    }
    document.getElementById("caixa").innerHTML = '<p>Agora clique no botâo abaixo e descubra quais eram as respostas certas:</p><a id="rever" onclick="mostrar()" class="waves-effect waves-light btn">Ver respostas</a>'
    document.getElementById("linha").style.width = "100%"
    document.getElementById("titulo").innerHTML = 'Parabéns, você conseguiu completar o quiz'
    document.getElementById("caixa").style.textAlign = 'center'  
    document.getElementById("caixa").style.paddingTop = '10px'  
    document.getElementById("rever").style.marginLeft = '20px'
}


function mostrar() {
    document.getElementById("caixa").innerHTML= '<div class="numero" id="resposta1"><a class="a" id="a1"href="#">1</a></div><div class="numero" id="resposta2"><a class="a"href="#" id="a2" onclick= "mudar2()">2</a></div><div class="numero" id="resposta3"><a  class="a"href="#" id="a3" onclick="mudar3()">3</a></div><div class="numero" id="resposta4"><a  class="a"href="#" id="a4" onclick="mudar4()">4</a></div><div class="numero" id="resposta5"><a  class="a"href="#" id="a5" onclick="mudar5()">5</a></div><br><br><p id="enunciado">Qual o nome dado a dupla de ataque rubro-negra formada por Adriano e Vagner Love no ano de 2009?</p><br><p><label><input id="1"class="with-gap" name="group3" type="radio" checked/><span id="certo">Império do amor</span></label></p><p><label><input id="2"class="with-gap" name="group3" type="radio" /><span>Reinado Rubro Negro</span></label></p><p><label><input id="3" class="with-gap" name="group3" type="radio"  /><span>Trem bala da colina</span></label></p><a id="rever" onclick="casa()" class="waves-effect waves-light btn">Voltar</a>'
    document.getElementById("caixa").style.paddingLeft = '30px'
    document.getElementById("caixa").style.textAlign = ''
    document.getElementById("resposta1").style.backgroundColor = 'black'
    document.getElementById("a1").style.backgroundColor = 'black'
    document.getElementById("resposta2").style.backgroundColor = 'red'
    document.getElementById("a2").style.backgroundColor = 'red'
    document.getElementById("resposta3").style.backgroundColor = 'red'
    document.getElementById("a3").style.backgroundColor = 'red'
    document.getElementById("resposta4").style.backgroundColor = 'red'
    document.getElementById("a4").style.backgroundColor = 'red'
    document.getElementById("resposta5").style.backgroundColor = 'red'
    document.getElementById("a5").style.backgroundColor = 'red'
    document.getElementById("certo").style.backgroundColor = 'green'
}
function mudar2(){
    document.getElementById("caixa").innerHTML = '<div class="numero" id="resposta1"><a class="a" id="a1"href="#" onclick="mostrar()">1</a></div><div class="numero" id="resposta2"><a class="a"href="#" id="a2" onclick= "mudar2()">2</a></div><div class="numero" id="resposta3"><a  class="a"href="#" id="a3" onclick="mudar3()">3</a></div><div class="numero" id="resposta4"><a  class="a"href="#" id="a4" onclick="mudar4()">4</a></div><div class="numero" id="resposta5"><a  class="a"href="#" id="a5" onclick="mudar5()">5</a></div><br><br><p id="enunciado">Quantos titulos o flamengo ganhou em 2019?</p><br><p><label><input id="4"class="with-gap" name="group3" type="radio"/><span>4</span></label></p><p><label><input id="5"class="with-gap" name="group3" type="radio" /><span>5</span></label></p><p><label><input id="6" class="with-gap" name="group3" type="radio"  checked /><span id="certo">3</span></label></p><a id="rever" onclick="casa()" class="waves-effect waves-light btn">Voltar</a>'
    document.getElementById("resposta1").style.backgroundColor = 'red'
    document.getElementById("a1").style.backgroundColor = 'red'
    document.getElementById("resposta3").style.backgroundColor = 'red'
    document.getElementById("a3").style.backgroundColor = 'red'
    document.getElementById("resposta4").style.backgroundColor = 'red'
    document.getElementById("a4").style.backgroundColor = 'red'
    document.getElementById("resposta5").style.backgroundColor = 'red'
    document.getElementById("a5").style.backgroundColor = 'red'
    document.getElementById("resposta2").style.backgroundColor = 'black'
    document.getElementById("a2").style.backgroundColor = 'black'
    document.getElementById("certo").style.backgroundColor = 'green'
}
function mudar3(){
    document.getElementById("caixa").innerHTML = '<div class="numero" id="resposta1"><a class="a" id="a1"href="#" onclick="mostrar()">1</a></div><div class="numero" id="resposta2"><a class="a"href="#" id="a2" onclick= "mudar2()">2</a></div><div class="numero" id="resposta3"><a  class="a"href="#" id="a3" onclick="mudar3()">3</a></div><div class="numero" id="resposta4"><a  class="a"href="#" id="a4" onclick="mudar4()">4</a></div><div class="numero" id="resposta5"><a  class="a"href="#" id="a5" onclick="mudar5()">5</a></div><br><br><p id="enunciado">Em qual ano o Flamengo foi fundado?</p><br><p><label><input id="7"class="with-gap" name="group3" type="radio"/><span>1915</span></label></p><p><label><input id="8"class="with-gap" name="group3" type="radio"  checked /><span id="certo">1895</span></label></p><p><label><input id="9" class="with-gap" name="group3" type="radio"  /><span>1925</span></label></p><a id="rever" onclick="casa()" class="waves-effect waves-light btn">Voltar</a>'
    document.getElementById("resposta1").style.backgroundColor = 'red'
    document.getElementById("a1").style.backgroundColor = 'red'
    document.getElementById("resposta3").style.backgroundColor = 'black'
    document.getElementById("a3").style.backgroundColor = 'black'
    document.getElementById("resposta4").style.backgroundColor = 'red'
    document.getElementById("a4").style.backgroundColor = 'red'
    document.getElementById("resposta5").style.backgroundColor = 'red'
    document.getElementById("a5").style.backgroundColor = 'red'
    document.getElementById("resposta2").style.backgroundColor = 'red'
    document.getElementById("a2").style.backgroundColor = 'red'
    document.getElementById("certo").style.backgroundColor = 'green'
}
function mudar4(){
    document.getElementById("caixa").innerHTML = '<div class="numero" id="resposta1"><a class="a" id="a1"href="#" onclick="mostrar()">1</a></div><div class="numero" id="resposta2"><a class="a"href="#" id="a2" onclick= "mudar2()">2</a></div><div class="numero" id="resposta3"><a  class="a"href="#" id="a3" onclick="mudar3()">3</a></div><div class="numero" id="resposta4"><a  class="a"href="#" id="a4" onclick="mudar4()">4</a></div><div class="numero" id="resposta5"><a  class="a"href="#" id="a5"  onclick="mudar5()">5</a></div><br><br><p id="enunciado">Qual o Jogador fez 3 gols no jogo contra o goias, que terminou 6X1 para o Flamengo pelo Brasileirão 2019?</p><br><p><label><input id="10"class="with-gap" name="group3" type="radio"  checked/><span id="certo">Arrascaeta</span></label></p><p><label><input id="11"class="with-gap" name="group3" type="radio" /><span>Bruno Henrique</span></label></p><p><label><input id="12" class="with-gap" name="group3" type="radio"  /><span>Gabigol</span></label></p><a id="rever" onclick="casa()" class="waves-effect waves-light btn">Voltar</a>'
    document.getElementById("resposta1").style.backgroundColor = 'red'
    document.getElementById("a1").style.backgroundColor = 'red'
    document.getElementById("resposta3").style.backgroundColor = 'red'
    document.getElementById("a3").style.backgroundColor = 'red'
    document.getElementById("resposta4").style.backgroundColor = 'black'
    document.getElementById("a4").style.backgroundColor = 'black'
    document.getElementById("resposta5").style.backgroundColor = 'red'
    document.getElementById("a5").style.backgroundColor = 'red'
    document.getElementById("resposta2").style.backgroundColor = 'red'
    document.getElementById("a2").style.backgroundColor = 'red'
    document.getElementById("certo").style.backgroundColor = 'green'
}
function mudar5(){
    document.getElementById("caixa").innerHTML = '<div class="numero" id="resposta1"><a class="a" id="a1"href="#" onclick="mostrar()">1</a></div><div class="numero" id="resposta2"><a class="a"href="#" id="a2" onclick= "mudar2()">2</a></div><div class="numero" id="resposta3"><a  class="a"href="#" id="a3" onclick="mudar3()">3</a></div><div class="numero" id="resposta4"><a  class="a"href="#" id="a4" onclick="mudar4()">4</a></div><div class="numero" id="resposta5"><a  class="a"href="#" id="a5"  onclick="mudar5()">5</a></div><br><br><p id="enunciado">Qual jogador usa a camisa 10 do Flamengo em 2020?</p><br><p><label><input id="13"class="with-gap" name="group3" type="radio"  checked/><span id="certo">Diego</span></label></p><p><label><input id="14"class="with-gap" name="group3" type="radio" /><span>Arrascaeta</span></label></p><p><label><input id="15" class="with-gap" name="group3" type="radio"  /><span>Gerson</span></label></p><a id="rever" onclick="casa()" class="waves-effect waves-light btn">Voltar</a>'
    document.getElementById("resposta1").style.backgroundColor = 'red'
    document.getElementById("a1").style.backgroundColor = 'red'
    document.getElementById("resposta3").style.backgroundColor = 'red'
    document.getElementById("a3").style.backgroundColor = 'red'
    document.getElementById("resposta4").style.backgroundColor = 'red'
    document.getElementById("a4").style.backgroundColor = 'red'
    document.getElementById("resposta5").style.backgroundColor = 'black'
    document.getElementById("a5").style.backgroundColor = 'black'
    document.getElementById("resposta2").style.backgroundColor = 'red'
    document.getElementById("a2").style.backgroundColor = 'red'
    document.getElementById("certo").style.backgroundColor = 'green'
}
function casa(){
    document.getElementById("caixa").innerHTML = '<p>Agora você pode refazer o quiz ou desafiar outra pessoa para descobrir quem sabe mais sobre o mengão! </p><a id="rever" onclick="mostrar()" class="waves-effect waves-light btn">Ver respostas</a><a id="rever" onclick="reiniciar()" class="waves-effect waves-light btn">Refazer quiz</a>'
    document.getElementById("linha").style.width = "100%"
    document.getElementById("titulo").innerHTML = 'Parabéns, você conseguiu completar o quiz'
    document.getElementById("caixa").style.textAlign = 'center'  
    document.getElementById("caixa").style.paddingTop = '10px'  
    document.getElementById("rever").style.marginLeft = '0px'
}
function reiniciar(){
    document.getElementById("caixa").innerHTML = '<p class="scale-bounce" id="enunciado">Qual o nome dado a dupla de ataque rubro-negra formada por Adriano e Vagner Love no ano de 2009?</p><br><p class="scale-bounce"><label><input id="1"class="with-gap" name="group3" type="radio"/><span>Império do amor</span></label></p><p class="scale-bounce"><label><input id="2"class="with-gap" name="group3" type="radio" /><span>Reinado Rubro-Negro</span></label></p><p class="scale-bounce"><label><input id="3" class="with-gap" name="group3" type="radio"  /><span>Trem bala da colina</span></label></p><a onclick="responder()" class="waves-effect waves-light btn" >enviar</a>'
    document.getElementById("enunciado").style.marginLeft ="20px"
    document.getElementById("enunciado").style.fontSize = "17px"
    document.getElementById("titulo").innerHTML = '1/5'
    document.getElementById("titulo").style.textAlign = 'center'
    document.getElementById("caixa").style.textAlign = ''
}