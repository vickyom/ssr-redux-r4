import Home from "./home";
import News from "./news";
import Movies from "./movies/MoviesPage";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
        type: "serverRoutes"
    },
    {
        path: "/news",
        component: News,
        type: "serverRoutes"
    },
    {
        path: "/movies",
        exact: true,
        component: Movies,
        type: "serverRoutes"
    },
    {
        path: "/movies/:year",
        component: Movies,
        type: "serverRoutes"
    }
];

export default routes;
