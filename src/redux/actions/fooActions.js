import axios from 'axios';

export const getPosts = () => dispatch =>
    axios({
        method: 'GET',
        url: `http://my-cv-back-end:3400/v1/posts`,
        headers: []
    }).then(response => dispatch({ type: 'FOO', payload: response.data }))
        .catch(err => console.log(err))