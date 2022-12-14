import routesConfig from "../Config/routes";

// Pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

// Layouts
import HeaderOnly from "../components/Layout/HeaderOnly";

// Public Routes
const publicRoutes = [
    { path: routesConfig.home , component: Home},
    { path: routesConfig.following , component: Following},
    { path: routesConfig.profile , component: Profile},
    { path: routesConfig.upload , component: Upload, layout: HeaderOnly},
    { path: routesConfig.search , component: Search, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }