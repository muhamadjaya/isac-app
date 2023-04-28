import AppLayout from '@/components/Layouts/AppLayout'
import ContentSpinner from '@/components/Utils/ContentSpinner'
import dynamic from 'next/dynamic'

const DashboardMainIndex = dynamic(() => import('@/features/Dashboard/screens/MainIndex'), {
    loading: () => (<ContentSpinner />)
})

const Dashboard = () => {
    return (
        <AppLayout title='Dashboard'>
            <DashboardMainIndex />
        </AppLayout>
    )
}

export default Dashboard
