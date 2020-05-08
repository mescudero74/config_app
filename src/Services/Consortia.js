import axios from 'axios';

const makeParams = (params) => {
  var request = {
    "tipo": params.type,
    "version": params.version,
    "consorcio": {
      "id": parseInt(params.id),
      "name": params.name,
      "estado": params.state,
      "mail": params.mail
    }
  }
  return request
}

export async function createConsortium(params){
  const body = makeParams(params)
  console.log(body)
  return await axios.post(`http://localhost:5000/consorcios`, body)
    .then(function (response) {
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}
