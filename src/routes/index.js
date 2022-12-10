// Pages
import Home from "../pages/Home"
import Following from "../pages/Following"
import Profile from "../pages/Profile"
import Upload from "../pages/Upload"
import Search from "../pages/Search"

// Layouts
import HeaderOnly from "../components/Layout/HeaderOnly"

// Public Routes
const publicRoutes = [
    { path: "/", component: Home},
    { path: "/following", component: Following},
    { path: "/@:nickname", component: Profile},
    { path: "/upload", component: Upload, layout: HeaderOnly},
    { path: "/search", component: Search, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }