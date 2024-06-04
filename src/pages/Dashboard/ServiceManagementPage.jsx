import React from 'react';
import ServiceList from '~/components/Dashboard/ServiceManagement/ServiceList';

import DashboardLayout from '~/layouts/DashboardLayout';

function ServiceManagementPage() {
    return (
        <DashboardLayout>
            <ServiceList />
        </DashboardLayout>
    );
}

export default ServiceManagementPage;
