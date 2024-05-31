import React from 'react';
import ServiceList from '~/components/Dashboard/ServiceList';

import DashboardLayout from '~/layouts/DashboardLayout';

function ServiceManagementPage() {
    return (
        <DashboardLayout>
            <ServiceList />
        </DashboardLayout>
    );
}

export default ServiceManagementPage;
