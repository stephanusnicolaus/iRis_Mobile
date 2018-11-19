const initState = {
    articleList: [],
    articleDetail: []
}

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_ARTICLE_LIST':
            return {
                ...state,
                articleList: action.payload.articlelist
            }
        case 'FETCH_ARTICLE_DETAIL':
            return {
                ...state,
                articleDetail: action.payload.articledetail
            }
        default:
            return state
    }
}

export default articleReducer