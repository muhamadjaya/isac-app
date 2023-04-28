import AppLayout from '@/components/Layouts/AppLayout'
import ContentSpinner from '@/components/Utils/ContentSpinner'
import dynamic from 'next/dynamic'

const CreateClassroom = dynamic(() => import('@/features/Classrooms/screens/CreateClassroom'), {
    loading: () => (<ContentSpinner />)
})

export default function Create() {
    return (
        <AppLayout title='Add Data Classroom'>
            <CreateClassroom />
        </AppLayout>
    )
};
