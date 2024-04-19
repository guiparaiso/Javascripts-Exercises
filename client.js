const axios = require("axios");
async function get_token(){
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}
return axios
  .post("https://tecweb-js.insper-comp.com.br/token", {username:"guilhermevp"},config)
  .then((response) => response.data.accessToken);
}

function eh_primo(n) {
  let i = 2;
  if (n <= 1) {
      return false;
  }
  if (n === 2) {
      return true;
  } else {
      while (i < n) {
          if (n % i === 0) {
              return false;
          }
          i = i + 1;
      }
      return true;
  }
}

async function get_exercises(token){
  const config2 = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + token
    }
  }
  return axios
    .get("https://tecweb-js.insper-comp.com.br/exercicio",config2)
    .then((response) => response.data);
}

async function solving_exercise(token,operacao,exercices){
  let entrada = exercices[operacao]['entrada']
  let answer =entrada['a'] + entrada['b']
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }}
  return axios
  .post(`https://tecweb-js.insper-comp.com.br/exercicio/${operacao}`, {'resposta':answer}, config)
  .then((response) => (response.data));
}

async function length_size(token,exercices){
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }}
  let entrada = exercices['tamanho-string']['entrada']
  let answer = entrada['string'].length
  return axios
  .post(`https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string`, {'resposta':answer}, config)
  .then((response) => (response.data));
}

async function username(token,exercices){
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }}
  let entrada = exercices['nome-do-usuario']['entrada']
  let ind = entrada['email'].indexOf('@')
  let answer = entrada['email'].slice(0,ind)
  return axios
  .post(`https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario`, {'resposta':answer}, config)
  .then((response) => (response.data));
}

async function distance(token,exercices){
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }}
  let answer = 1
  let entrada = exercices['jaca-wars']['entrada']
  let v = entrada['v']
  let teta = (Math.PI)*entrada['theta']/180
  let d = v*v*Math.sin(2*teta)/9.8
  if (d < 100){
    answer = -1
  }
  else if (d === 100){
    answer = 0
  }
  // console.log(entrada)
  // console.log(`a velocidade é ${v} e o ângulo é ${teta} com a distância ${d}. Logo a resposta deve ser ${answer}`);

  return axios
  .post(`https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars`, {'resposta':answer}, config)
  .then((response) => (response.data));
}

async function bissexto(token,exercices){
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }}
  let bissexto = false
  let entrada = exercices['ano-bissexto']['entrada']
  let year = entrada['ano']
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    bissexto = true; // O ano é bissexto
}
  return axios
  .post(`https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto`, {'resposta':bissexto}, config)
  .then((response) => (response.data));
}

async function pizza_volume(token,exercices){
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }}
  let entrada = exercices['volume-da-pizza']['entrada']
  let z = entrada['z']
  let a = entrada['a']
  let answer = Math.round(Math.PI*z*z*a)
  return axios
  .post(`https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza`, {'resposta':answer}, config)
  .then((response) => (response.data));
}

async function mru(token, exercices) {
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }
  };

  let entrada = exercices['mru']['entrada'];
  let s0 = entrada['s0'];
  let v = entrada['v'];
  let t = entrada['t'];
  let s = s0 + v * t; // Recalcula `s` baseado nos valores de entrada

  //console.log(`A velocidade é ${v} e o tempo é ${t}. Logo a distância deve ser ${s}`);

  return axios.post(`https://tecweb-js.insper-comp.com.br/exercicio/mru`, {'resposta': s}, config)
    .then((response) =>(response.data));
  }

  async function inverte_string(token,exercices){
    const config = {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}` 
        }}
    let entrada = exercices['inverte-string']['entrada']
    let answer = entrada['string'].split('').reverse().join('')
    //console.log(`O valor da String é ${entrada['string']} e a resposta é ser ${answer}`)
    return axios
    .post(`https://tecweb-js.insper-comp.com.br/exercicio/inverte-string`, {'resposta':answer}, config)
    .then((response) => (response.data));
  }
  async function soma_valores(token,exercices){
    const config = {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}` 
  }
}
  let entrada = exercices['soma-valores']['entrada']
  let obj = entrada['objeto']
  let answer = 0
  for (let i in obj){
    answer += obj[i]
  }
  return axios
    .post(`https://tecweb-js.insper-comp.com.br/exercicio/soma-valores`, {'resposta':answer}, config)
    .then((response) => (response.data));
}

async function n_primo(token,exercices){
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}` 
      }}
  let entrada = exercices['n-esimo-primo']['entrada']['n']
  list = []
  let i =0
  while (list.length < entrada){
    if (eh_primo(i)){
      list.push(i)
    }
    i++
  }
  let answer = list[entrada-1]
  return axios
  .post('https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo',{'resposta':answer}, config)
  .then((response) => (response.data));
}

async function maior_prefixo_comum(token, exercices) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    const list_str = exercices['maior-prefixo-comum']['entrada']['strings'];
    const list_prefix = [];

    for (let i = 0; i < list_str.length; i++) {
        const str = list_str[i];
        for (let j = i + 1; j < list_str.length; j++) {
            const str2 = list_str[j];
            const leng_min = Math.min(str.length, str2.length);
            let prefix = '';
            for (let k = 0; k < leng_min; k++) {
                if (str[k] != str2[k]) {
                    prefix = str.slice(0, k);
                    list_prefix.push(prefix);
                    break;
                }
            }
        }
    }

    let l = '';
    for (let prefix of list_prefix) {
        if (prefix.length >= l.length && prefix != '') {
            l = prefix;
        }
    }
   
    answer = l;
    return axios
        .post('https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum', { 'resposta': answer }, config)
        .then((response) => (response.data));
}
async function soma_segundo_maior_menor(token, exercices) {
  const config = {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
      }
  };
  entrada = exercices['soma-segundo-maior-e-menor-numeros']['entrada']['numeros'];
  const checknumebers=(a,b)=>a-b;
  list = entrada.sort(checknumebers);
  let min = list[1];
  let second_max=entrada[entrada.length-2];
  // console.log("a lista de numeros é : ",entrada,"o segundo maior é: ",second_max,"o menor é: ",min,"a lista ordenada é: ",list)
  return axios
  .post('https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros',{'resposta':min+second_max}, config)
  .then((response) => (response.data));
}
async function conta_palindromos(token, exercices) {
  const config = {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json,",
          "Authorization": `Bearer ${token}`
}
  }
  entrada = exercices['conta-palindromos']['entrada']['palavras'];
  let count = 0;
  for( str of entrada){
      if(str === str.split('').reverse().join('')){
          count++;
      }
  }
  return axios
  .post('https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos',{'resposta':count}, config)
  .then((response) => (response.data));
}
async function soma_strings_int(token, exercices) {
  const config = {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
      }}
  let strings = exercices['soma-de-strings-de-ints']['entrada']['strings'];
  const numerosEncontrados = strings.map(string => {
    const numeros = string.match(/-?\d+/g); // Encontra todas as sequências de dígitos na string
    return numeros ? numeros.map(Number) : []; // Converte as strings de números em números
}).reduce((acc, val) => acc.concat(val), []); // Combina as arrays em uma única array
  const soma = numerosEncontrados.reduce((acc, val) => acc + val, 0); // Soma todos os números
  return axios
  .post('https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints',{'resposta':soma}, config)
  .then((response) => (response.data));
}
async function soma_com_requisicoes(token, exercices) {
  let requisicoes = exercices['soma-com-requisicoes']['entrada']['endpoints'];
  let answer = 0
  const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
    }}
  for (req of requisicoes){

    await axios.get(req,config)
    .then((response) => {
      answer += response.data
    });
  }
  return axios
  .post('https://tecweb-js.insper-comp.com.br/exercicio/soma-com-requisicoes',{'resposta':answer}, config)
  .then((response) =>(response.data));
}
async function caça_ao_tesouro(token, exercices) {
  const config = {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
      }}
  let answer = 0
  entrada = exercices['caca-ao-tesouro']['entrada'];
  console.log(entrada)
  return axios
  .post('https://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro',{'resposta':answer}, config)
  .then((response) => console.log(response.data));
} 
async function main(){
  let token = await get_token()
  let exercises = await get_exercises(token)
  let soma = await solving_exercise(token,'soma',exercises)
  let tamanho = await length_size(token,exercises)
  let nome = await username(token,exercises)
  let d = await distance(token,exercises)
  let b = await bissexto(token,exercises)
  let v = await pizza_volume(token,exercises)
  let s = await mru(token,exercises)
  let is = await inverte_string(token,exercises)
  let sum = await soma_valores(token,exercises)
  let n = await n_primo(token,exercises)
  let m = await maior_prefixo_comum(token,exercises)
  let sm = await soma_segundo_maior_menor(token,exercises)
  let cp = await conta_palindromos(token,exercises)
  let ss = await soma_strings_int(token,exercises)
  let sc = await soma_com_requisicoes(token,exercises)
  let ct = await caça_ao_tesouro(token,exercises)
  // console.log(exercises)
  
  
}
main()