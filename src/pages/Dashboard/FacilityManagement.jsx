import React from 'react';
import FacilitiesList from '~/components/Dashboard/FacilityList';
import DashboardLayout from '~/layouts/DashboardLayout';

function FacilitiesManagementPage() {
    return (
        <DashboardLayout>
            <FacilitiesList />
        </DashboardLayout>
    );
}

export default FacilitiesManagementPage;
