import  axios from 'axios'
 

export const requestService = (requestConfig) => {

  return axios(requestConfig)
  .then((response) => response.data)
  .catch((error) => {throw error})
}


