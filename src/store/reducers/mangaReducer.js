const intialStore = {
    allManga: [],
    mangaFavourites: [],
    mangaDetail: {}
}

export default function MangaReducer (state= intialStore, action) {
    switch (action.type) {
        case 'ADD_MANGA_FAVOURITE':
            return {
                ...state,
                mangaFavourites:state.mangaFavourites.concat(action.manga)
            }
        case 'DELETE_MANGA_FAVOURITE':
            return {
                ...state,
                mangaFavourites:state.mangaFavourites.filter(x => x.id !== action.manga.id)
            }
        case 'DETAIL_MANGA':
            console.log('Detail manga reducer : ',action.manga)
            return {
                ...state,
                mangaDetail: action.manga
            }
        case 'GET_MANGA':
            return {
                ...state,
                allManga: action.mangas
            }
        default:
            return state
    }
}
