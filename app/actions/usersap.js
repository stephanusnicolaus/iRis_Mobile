import axios from 'axios'

export const unlockUserSap = (userSap) => {
    return (dispatch) => {
        let bodyFormData = new FormData();
        bodyFormData.append('userSap', userSap);

        axios({
            method: 'post',
            url: 'http://iris.utr.co.id/unlock_user_sap',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data'} }
        })
        .then(function (response) {
            //handle success
            console.log(response.data.response)
            dispatch({
                type: 'UNLOCK_STATUS',
                payload:{
                    unlockStatusParam:response.data.response
                }
            })
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        });
    }
}

export const fillUserSap = (userSap) => {
    return {
        type: 'USER_SAP_CHANGE',
        payload: {
            userSapParam: userSap
        }
    }
}

export const fetchListUser = () => {
    return (dispatch) => {
        axios.get('http://iris.utr.co.id/user_list_sap')
        .then(response => {
            const userlist = response.data
            console.log(userlist);
            dispatch({
                type: 'FETCH_USER_LIST',
                payload:{
                    userlist:userlist
                }
            })
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        });
    }
}