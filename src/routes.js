import VueRouter from 'vue-router';
import head from "./pages/head";
import pageAdd from "./pages/pageAdd";
import pageDelete from "./pages/pageDelete";
import pageEdit from "./pages/pageEdit";
import pageView from "./pages/pageView";

export default new VueRouter({
    routes: [
/*        {
            path: '/',
            redirect: '/Departments/'
        },*/
        {
            path: '/:id',
            component: head
        },
        {
            path: '/:id/edit',
            component: pageEdit
        },
        {
            path: '/:id/delete',
            component: pageDelete
        },
        {
            path: '/:id/view',
            component: pageView
        },
        {
            path: '/:id/add',
            component: pageAdd
        },
    ],
    mode: 'history'
})
