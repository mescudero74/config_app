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

export async function Consortium(){
  return await axios.get(`${process.env.REACT_APP_API_URL}/consorcios`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function createConsortium(params, setConsorcios){
  const body = makeParams(params)
  return await axios.post(`${process.env.REACT_APP_API_URL}/consorcios`, body)
    .then(function (response) {
      setConsorcios(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function updateConsortium(params, setConsorcios){
  const body = makeParams(params)
  return await axios.put(`${process.env.REACT_APP_API_URL}/consorcios/${params._id}`, body)
    .then(function (response) {
      setConsorcios(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function deleteConsortium(id, setConsorcios){
  return await axios.delete(`${process.env.REACT_APP_API_URL}/consorcios/${id}`)
    .then(function (response) {
      setConsorcios(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}
