// import { HomePage } from './pages/HomePage';
import { KeepApp } from './pages/KeepApp';
import { LoginPage } from './pages/LoginPage';


const routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/home',
    component: KeepApp,
  },

];

export default routes;
