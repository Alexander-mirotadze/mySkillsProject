import routes from "../constants/routes"
import AuthGuard from "../guard/AuthGuard"
import Home from "../pages/Home/Home"
import News from "../pages/News/News"
import Popular from "../pages/Popular/Popular"

const appRoutes = [
  {
    path: routes.Home,
    Component: Home,
  },
  {
    path: routes.News,
    Component: News,
  },
  {
    path: routes.Popular,
    Component: Popular,
    Guard: AuthGuard,
  },
]

export default appRoutes
