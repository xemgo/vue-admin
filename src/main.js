
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/main.css'
// Components
import SignIn from "./components/Signin.vue"
import Index from "./components/Index.vue"
import Signup from "./components/Signup.vue"
import ContactUs from "./components/ContactUs.vue"
import Error from "./components/Error.vue"
import Users from "./components/Users.vue"
import Product from "./components/Product.vue"

const routes = [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
    },
    {
        path: '/',
        name: 'Index',
        component: Index,
      },
      {
        path: '/sign-up',
        name: 'Signup',
        component: Signup,
      },
      {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs,
      },
      {
        path: '/error',
        name: 'Error',
        component: Error,
      },
      {
        path: '/users',
        name: 'Users',
        component: Users,
      },    
       {
        path: '/product',
        name: 'Product',
        component: Product,
      },

      
   
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
