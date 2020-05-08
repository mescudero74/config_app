import axios from 'axios';

const makeParams = (params) => {
  var request = {
    "tipo": params.type,
    "version": parseInt(params.version),
    "consorcio_id": parseInt(params.consortium_id),
    "env": {
      "id": parseInt(params.id),
      "name": params.name,
      "estado": params.state,
      "nodos": params.nodes
    }
  }
  return request
}

export async function createEnv(params){
  const body = makeParams(params)
  console.log(body)
  return await axios.post(`http://localhost:5000/env`, body)
    .then(function (response) {
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}