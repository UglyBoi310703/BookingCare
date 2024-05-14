import config from '~/config';



// Pages
import Home from '~/pages/Home';
import Doctors from '~/pages/Doctors';

import Facility from '~/pages/Facility';
import Search from '~/pages/Search';
import Services from '~/pages/Services';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.doctors, component: Doctors },
    { path: config.routes.services, component: Services },
    { path: config.routes.facility, component: Facility},
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
