import { useAppLayoutContext } from "@/components/Layouts/AppLayout";
import { useEffect } from "react";

import classroomsRoute from "@/features/Classrooms/app/classroomsRoute";
import GoBackTopbarAction from "@/components/Topbar/GoBackTopbarAction";
import ClassroomForm from "../components/ClassroomForm";

export default function CreateClassroom() {
    const { setTopbarActions } = useAppLayoutContext()

    useEffect(() => {
        setTopbarActions(<GoBackTopbarAction href={classroomsRoute.url('classroomsIndex')} title="Create New Classroom" />)
    }, [])

    return (<ClassroomForm />)
};
