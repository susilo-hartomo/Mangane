import Home from "../views/Home";
import DetailManga from "../views/DetailManga";
import Favourites from "../views/Favourites";

const routes = [
    {
        path: '/', 
        exact: true,
        component: Home
    },
    {
        path: '/detail/:id',
        exact: true,
        component: DetailManga
    },
    {
        path: '/favourites',
        exact: true,
        component: Favourites
    }
]

export default routes