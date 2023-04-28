import AppLayout from "@/components/Layouts/AppLayout"
import ContentSpinner from "@/components/Utils/ContentSpinner"
import dynamic from "next/dynamic"

const TeacherMainIndex = dynamic(() => import('@/features/Teachers/screens/MainIndex'), {
    loading: () => (<ContentSpinner />)
})

export default function Teacher() {
    return (
        <AppLayout title="Data Teachers">
            <TeacherMainIndex />
        </AppLayout>
    )
}
