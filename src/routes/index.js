import Config from "../Config";

// Pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

// Layouts
import HeaderOnly from "../layouts/HeaderOnly";

// Public Routes
const publicRoutes = [
    { path: Config.routesConfig.home , component: Home},
    { path: Config.routesConfig.following , component: Following},
    { path: Config.routesConfig.profile , component: Profile},
    { path: Config.routesConfig.upload , component: Upload, layout: HeaderOnly},
    { path: Config.routesConfig.search , component: Search, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }