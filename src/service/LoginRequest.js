import  axios from 'axios'


export const requestService = (requestConfig, responseConfig, errorConfig) => {

  return axios(requestConfig)
  .then((response) => responseConfig(response))
  .catch((error) => errorConfig(error))
}


