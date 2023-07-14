import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import MyNode from 'src/pages/MyNode.vue'
import MyChannel from 'src/pages/MyChannel'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/MyNode'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/MyNode',
    children: [
      {
        path: 'MyNode',
        name: 'MyNode',
        component: MyNode
      },
      {
        path: 'MyChannel',
        name: 'MyChannel',
        component: MyChannel
      }      
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
