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

export async function Env(){
  return await axios.get(`http://localhost:5000/env`)
    .then(function (response) {
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function createEnv(params, setEnvs){
  const body = makeParams(params)
  console.log(body)
  return await axios.post(`http://localhost:5000/env`, body)
    .then(function (response) {
      setEnvs(response.data)
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function updateEnv(params, setEnvs){
  const body = makeParams(params)
  console.log(body)
  return await axios.post(`http://localhost:5000/env/${params._id}`, body)
    .then(function (response) {
      setEnvs(response.data)
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function deteleEnv(id, setEnvs){
  return await axios.delete(`http://localhost:5000/env/${id}`)
    .then(function (response) {
      setEnvs(response.data)
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}