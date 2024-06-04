import React, { useEffect } from 'react';
import DoctorList from '~/components/Dashboard/DoctorList';

import DashboardLayout from '~/layouts/DashboardLayout';
import doctorData from '~/assets/data/DoctorData';
function DoctorManagementPage() {
    return (
        <DashboardLayout>
            <DoctorList />
        </DashboardLayout>
    );
}

export default DoctorManagementPage;
