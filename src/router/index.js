import Faq from "../pages/faq/Faq";
import Feedback from "../pages/feedback/Feedback";
import About from "../pages/about/About";
import PostIdPages from "../pages/PostIdPages";
import Posts from "../pages/Posts";
import Error from "../pages/Error/Error";
import AccountBox from "../pages/accountBox/index"
import Home from "../pages/HomePage/Home";
import List from '../pages/ListPage/List';
import Single from '../pages/SinglePage/Single';
import New from '../pages/NewPage/New';
import { productInputs, userInputs} from "../data/formSource";
import CalendarPage from "../pages/calendarPage/CalendarPage";


export const privateRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/faq', component: Faq, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/feedback', component: Feedback, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/calendar', component: CalendarPage, exact: true},
    {path: '/error', component: Error, exact: true},
    {path: '/posts/:id', component: PostIdPages, exact: true},
    {path: '/users', component: List, exact: true},
    {path: '/users/:userId', component: Single, exact: true},
    { path: '/users/new', component: () => <New input={userInputs} title="Add New User"/>, exact: true },
    {path: '/products', component: List, exact: true},
    {path: '/products/:productsId', component: Single, exact: true},
    {path: '/products/new', component: () => <New input={productInputs} title="Add New Product"/>, exact: true},

]

export const publicRoutes = [
    {path: '/login', component: AccountBox, exact: true},
]