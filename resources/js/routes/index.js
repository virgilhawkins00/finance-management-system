import DashboardLayout from "../layouts/DashboardLayout.vue";
import UsersPage from "../pages/users/UsersPage.vue";
import Dashboard from "../pages/Dashboard.vue";
import UserForm from "../pages/users/UserForm.vue";

const routes = [
    {
        path: '/',
        component: DashboardLayout,
        children:[
            {
                path:'',
                component:Dashboard
            },
            {
                path:'/users',
                component:UsersPage
            },
            {
                path:'/users/save',
                component:UserForm
            },
            {
                path:'/users/save/:id',
                component:UserForm
            }
        ]
    },
]
export default routes;
