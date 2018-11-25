import { lazy } from "react";

const Main = lazy(() => import('./pages/MainPage.jsx'));
const Map = lazy(() => import('./pages/MapPage.jsx'));
const City = lazy(() => import('./pages/CityPage.jsx'));

const routes = [
    {
        path: '/',
        title: 'Главная',
        exact: true,
        component: Main
    },
    {
        path: '/map',
        title: 'На карте',
        exact: false,
        toMenu: true,
        component: Map
    }, {
        path: '/city',
        title: 'Поиск по городам',
        exact: false,
        toMenu: true,
        component: City
    }
];

export default routes;