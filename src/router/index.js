import Faq from "../pages/faq/Faq";
import Feedback from "../pages/feedback/Feedback";
import About from "../pages/about/About";
import Error from "../pages/Error/Error";
import AccountBox from "../pages/accountBox/index"

import List from '../pages/ListPage/List';
import Single from '../pages/SinglePage/Single';
import New from '../pages/NewPage/New';
import { productInputs, userInputs} from "../data/formSource";
import CalendarPage from "../pages/calendarPage/CalendarPage";
import AnalitycsPage from "../pages/AnalyticPage/AnalyticsPage";
import Home from "../pages/Home/Home";
import SingleApplicationPage from "../pages/singleApplicationPage/SingleApplicationPage";
import UserPage from "../pages/userPage/UserPage";
import NewTicket from "../pages/newTicket/NewTicket";


export const privateRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/analytics', component: AnalitycsPage, exact: true},
    {path: '/faq', component: Faq, exact: true},
    {path: '/profile', component: UserPage, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/feedback', component: Feedback, exact: true},
    {path: '/calendar', component: CalendarPage, exact: true},
    {path: '/error', component: Error, exact: true},
    {path: '/users', component: List, exact: true},
    {path: '/users/:userId', component: Single, exact: true},
    { path: '/users/new', component: () => <New input={userInputs} title="Add New User"/>, exact: true },
    { path: '/tickets/new', component:NewTicket, exact: true },
    {path: '/products', component: List, exact: true},
    {path: '/products/:productsId', component: Single, exact: true},
    {path: '/tickets/:newTicketId', component: SingleApplicationPage, exact: true},
    {path: '/products/new', component: () => <New input={productInputs} title="Add New Product"/>, exact: true},

]

export const publicRoutes = [
    {path: '/login', component: AccountBox, exact: true},
]