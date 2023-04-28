import AppLayout from "@/components/Layouts/AppLayout"
import ContentSpinner from "@/components/Utils/ContentSpinner"
import dynamic from "next/dynamic"

const CreateTeacher = dynamic(() => import('@/features/Teachers/screens/CreateTeacher'), {
    loading: () => (<ContentSpinner />)
})

export default function Create() {

    return (
        <AppLayout title="Create New Teachers">
            <CreateTeacher />
        </AppLayout>
    )
}
