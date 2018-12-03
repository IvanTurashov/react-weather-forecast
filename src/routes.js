import { lazy } from "react";

import MapIcon from '../assets/map.png';
import ChartIcon from '../assets/chart.png';

const Main = lazy(() => import('./pages/main/MainPage.jsx'));
const Map = lazy(() => import('./pages/map/MapPage.jsx'));
const City = lazy(() => import('./pages/chart/ChartPage.jsx'));

const routes = [
    {
        path: '/',
        title: 'Main',
        exact: true,
        component: Main,
        fullSize: true,
        center: true
    },
    {
        path: '/map',
        title: 'Map',
        exact: false,
        toMenu: true,
        img: MapIcon,
        component: Map
    }, {
        path: '/chart',
        title: 'Chart',
        exact: false,
        toMenu: true,
        img: ChartIcon,
        component: City
    }
];

export default routes;