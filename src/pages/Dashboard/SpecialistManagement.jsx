import React from 'react';
import SpecialistList from '~/components/Dashboard/SpecialListManagement/SpecialistList';

import DashboardLayout from '~/layouts/DashboardLayout';

function SpecialistManagement() {
    return (
        <DashboardLayout>
            <SpecialistList />
        </DashboardLayout>
    );
}

export default SpecialistManagement;
