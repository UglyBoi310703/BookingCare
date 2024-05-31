import React from 'react';
import FacilitiesList from '~/components/Dashboard/FacilityList';
import DashboardLayout from '~/layouts/DashboardLayout';

function FacilitiesManagementList() {
    return (
        <DashboardLayout>
            <FacilitiesList />
        </DashboardLayout>
    );
}

export default FacilitiesManagementList;
