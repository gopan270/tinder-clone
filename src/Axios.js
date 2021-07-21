import axios from 'axios';

const instance=axios.create({
    baseURL:"https://tinder-backend-gop.herokuapp.com"
})

export default instance;