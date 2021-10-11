import axios from 'axios';
import * as actionTypes from './actionTypes';

const url = "https://huggiys.herokuapp.com/api/account/register/";

export const signup = (data) => {
    return{
        type: actionTypes.SIGNUP,
        value: data
    }
}

export const initSignup = () => {
    var formdata = new FormData();
    formdata.append("username", "Adam23");
    formdata.append("password", "vocabulary");
    formdata.append("email", "Adam23@gmail.com");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

    return dispatch => {
        axios.post(url, formdata)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
}