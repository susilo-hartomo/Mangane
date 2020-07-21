export const addFavourite = (manga) => {
    return {
        type: 'ADD_MANGA_FAVOURITE',
        manga: manga
    }
}

export const deleteFavourite = (manga) => {
    return {
        type: 'DELETE_MANGA_FAVOURITE',
        manga: manga
    }
}

export const detailManga = (manga) => {
    return {
        type: 'DETAIL_MANGA',
        manga: manga
    }
}

export const getManga = () => {
    return (dispatch) => {
        let url = 'https://kitsu.io/api/edge/anime'
        fetch( url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then((result) => {
            console.log('result: ', result);
            dispatch({
                type: 'GET_MANGA',
                mangas: result.data
            })
        }).catch((err) => {
            console.log(err)
        });
    }
}
