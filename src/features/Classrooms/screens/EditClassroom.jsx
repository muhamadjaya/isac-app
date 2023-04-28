import { useAppLayoutContext } from "@/components/Layouts/AppLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import classroomsRoute from "@/features/Classrooms/app/classroomsRoute";
import GoBackTopbarAction from "@/components/Topbar/GoBackTopbarAction";
import ClassroomForm from "../components/ClassroomForm";
import useClassrooms from "../app/classroomsHook";

export default function EditClassroom() {
    const router = useRouter()
    const { setTopbarActions } = useAppLayoutContext()
    const { getClassroomDetail } = useClassrooms()
    const [classroom, setClassroom] = useState({})

    useEffect(() => {
        setTopbarActions(<GoBackTopbarAction href={classroomsRoute.url('classroomsIndex')} title="Edit Data Classroom" />)
        getClassroomDetail(router.query.id)
            .then((res) => {
                setClassroom({
                    id: res.data.id,
                    name: res.data.name,
                    code: res.data.code,
                    description: res.data.description,
                })
            })
    }, [])

    return (
        <ClassroomForm isLoading={!classroom?.id} data={classroom} />
    )
};
