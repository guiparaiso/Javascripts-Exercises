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

async function main(){
  let token = await get_token()
  let exercises = await get_exercises(token)
  console.log(exercises)
}
main()