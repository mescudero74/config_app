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
  return await axios.get(`http://localhost:5000/consorcios`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function createConsortium(params, setConsorcios){
  const body = makeParams(params)
  console.log(body)
  return await axios.post(`http://localhost:5000/consorcios`, body)
    .then(function (response) {
      setConsorcios(response.data)
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function updateConsortium(params, setConsorcios){
  const body = makeParams(params)
  console.log(body)
  return await axios.put(`http://localhost:5000/consorcios/${params._id}`, body)
    .then(function (response) {
      setConsorcios(response.data)
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}

export async function deleteConsortium(id, setConsorcios){
  return await axios.delete(`http://localhost:5000/consorcios/${id}`)
    .then(function (response) {
      setConsorcios(response.data)
      console.log(response.data)
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
}
