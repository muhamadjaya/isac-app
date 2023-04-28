import AppLayout from '@/components/Layouts/AppLayout'
import ContentSpinner from '@/components/Utils/ContentSpinner'
import dynamic from 'next/dynamic'

const EditClassroom = dynamic(() => import('@/features/Classrooms/screens/EditClassroom'), {
    loading: () => (<ContentSpinner />)
})

export default function Edit() {
    return (
        <AppLayout title='Edit Data Classroom'>
            <EditClassroom />
        </AppLayout>
    )
};
