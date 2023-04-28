import { useAppLayoutContext } from "@/components/Layouts/AppLayout";
import { useEffect } from "react";

import FormTeacher from "@/features/Teachers/components/FormTeacher";
import GoBackTopbarAction from "@/components/Topbar/GoBackTopbarAction";
import teachersRoute from "@/features/Teachers/app/teachersRoute";

export default function CreateTeacher() {
    const { setTopbarActions } = useAppLayoutContext()

    useEffect(() => {
        setTopbarActions(
            <GoBackTopbarAction href={teachersRoute.url('teachersIndex')} title="Create New Teacher" />
        )
    }, [])

    return (
        <FormTeacher />
    )
}
