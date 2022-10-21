
//////////// INDEX

/* - LOCAL STORAGE: linha 10
   - CAMPO VAZIO: linha 19
   - LOGIN: linha 55
   - SENHA: linha 73
   - DARCK MODE: linha 92
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////     LOCAL STORAGE           /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 var login_cadastrado=localStorage.login; //------pega no local storage---///
 var sennha_cadastrado=localStorage.senha;

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////              /////////                  ////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

//////////////////////////////////////////////CAMPO VAZIO///////////////
function id( el ){
    return document.getElementById( el );
}

window.onload = function(){
console.log(sennha_cadastrado)
console.log(login_cadastrado)

id("botaologin").setAttribute("disabled", "disabled");


var login_valido=false;
var senha_valido= false;

function validar_submit(){
    let valido=0;
    let input=document.getElementsByClassName("campos_obrigatorios");
   
    for (let index = 0; index < input.length; index++) {//----------LOCALIZA INPUTS VAZIOS-----//
        const campo = input[index];
        if(campo.value == ''){
            valido-=1;
        }
        else{valido+=1;}
    }
    if(valido == input.length && senha_valido!= false && login_valido!= false){ //-----------REABILITA SUBMIT SE ATENDIDAS AS CONDIÇÕES----//
        id("botaologin").removeAttribute("disabled",);
    }
    else{
        id("botaologin").setAttribute("disabled", "disabled");//------------ SENÃO DESABILITA ---------////
    } }

    const validateSubmit= () =>{ validar_submit();}//-----------------------------executa função submit
    id("body_login").addEventListener('input', validateSubmit);

///////////////////// LOGIN /////////////////////////////////////////////

   const validateLogin = (event) => {
    const input = event.currentTarget;
       
        if(input.value!=login_cadastrado || input.value == "") {
            login_valido=false;
            id('span_login').style.display='block';
            id('login').classList.add('error_input');
            id('span_login').innerHTML="Login invalido.";
        } else {
            login_valido=true;
            id('span_login').style.display='none';
            id('login').classList.remove('error_input');
        }
    }
    id("login").addEventListener('input', validateLogin);

///////////////////////////// SENHA ////////////////////////////////////////
     const validateSenha = (event) => {
        const input = event.currentTarget;
        
        if(input.value!=sennha_cadastrado|| input.value == "") { 
            senha_valido=false;      
            id('span_senha').style.display='block';
            id('senha').classList.add('error_input');
            id('span_senha').innerHTML="Senha inválida.";
        } else {
            senha_valido=true;
            id('span_senha').style.display='none';
            id('senha').classList.remove('error_input');
        }
    }
    id("senha").addEventListener('input', validateSenha);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////     darck mode(executa o css salvo)  ////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var darck_storage=localStorage.darck_mode;
var darck_data="desativado"
if(darck_storage!="desativado"){
   
    document.getElementById("estilo_css").href="css/darck.css";
    document.getElementById('logo_header_img').src="img/telecall-logo-white.png";
    darck_data="ativado"
    localStorage.setItem("darck_mode",darck_data)
    }
    else{
    document.getElementById("estilo_css").href="css/css.css";
    document.getElementById('logo_header_img').src="img/logo_sem_fundo.png";
    darck_data="desativado"
    localStorage.setItem("darck_mode",darck_data)
    }
}
