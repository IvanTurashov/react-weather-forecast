import { lazy } from "react";

const Main = lazy(() => import('./pages/main/MainPage.jsx'));
const Map = lazy(() => import('./pages/map/MapPage.jsx'));
const City = lazy(() => import('./pages/chart/CityPage.jsx'));

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
        path: '/chart',
        title: 'Поиск по городам',
        exact: false,
        toMenu: true,
        component: City
    }
];

export default routes;