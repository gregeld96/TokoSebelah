import axios from 'axios'
const instace = axios.create({
  baseURL: 'https://e-com-greg.herokuapp.com'
})

export default instace
