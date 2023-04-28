import AppLayout from '@/components/Layouts/AppLayout'
import ContentSpinner from '@/components/Utils/ContentSpinner'
import dynamic from 'next/dynamic'

const MainIndex = dynamic(() => import('@/features/Classrooms/screens/MainIndex'), {
    loading: () => (<ContentSpinner />)
})

export default function Classrooms() {
    return (
        <AppLayout title='Data Classrooms'>
            <MainIndex />
        </AppLayout>
    )
};
