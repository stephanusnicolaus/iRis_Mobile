import axios from 'axios'

export const fetchArticleList = () => {
    return (dispatch) => {
        let bodyFormData = new FormData();
        bodyFormData.append('apiAndroid', 'yes');

        axios({
            method: 'post',
            url: 'http://iris.utr.co.id/viewarticles',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data'} }
        })
        .then(response => {
            const articlelist = response.data.response
            console.log(articlelist);
            dispatch({
                type: 'FETCH_ARTICLE_LIST',
                payload:{
                    articlelist:articlelist
                }
            })
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        });
    }
}

export const fetchArticleDetail = (articleId) => {
    return (dispatch) => {
        axios('http://iris.utr.co.id/detailpostandroid/'+articleId)
        .then(response => {
            const articledetail = response.data.response
            console.log(articledetail);
            dispatch({
                type: 'FETCH_ARTICLE_DETAIL',
                payload:{
                    articledetail:articledetail
                }
            })
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        });
    }
}