import React from 'react';
import DoctorList from '~/components/Dashboard/DoctorList';

import DashboardLayout from '~/layouts/DashboardLayout';

function DoctorManagementPage() {
    return (
        <DashboardLayout>
            <DoctorList />
        </DashboardLayout>
    );
}

export default DoctorManagementPage;
