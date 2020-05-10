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
  return await axios.get(`${process.env.REACT_APP_API_URL}/env`)
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
  return await axios.post(`${process.env.REACT_APP_API_URL}/env`, body)
    .then(function (response) {
      setEnvs(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function updateEnv(params, setEnvs){
  const body = makeParams(params)
  return await axios.put(`${process.env.REACT_APP_API_URL}/env/${params._id}`, body)
    .then(function (response) {
      setEnvs(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function deteleEnv(id, setEnvs){
  return await axios.delete(`${process.env.REACT_APP_API_URL}/env/${id}`)
    .then(function (response) {
      setEnvs(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}