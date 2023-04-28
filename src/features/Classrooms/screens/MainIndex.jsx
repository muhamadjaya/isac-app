import { useAppLayoutContext } from "@/components/Layouts/AppLayout"
import { useEffect } from "react"

import route from "@/features/Classrooms/app/classroomsRoute"
import LazyTable from "@/components/Table/LazyTable"
import Link from "next/link"
import MainTopbarActions from "@/features/Classrooms/components/MainTopbarActions"
import useClassrooms from "@/features/Classrooms/app/classroomsHook"
import useRouterWithFlash from "@/lib/RouterWithFlash"
import FlatTableAction from "@/components/Table/FlatTableAction"

export default function Main() {
    const { setTopbarActions } = useAppLayoutContext()
    const { getClassrooms } = useClassrooms()
    const router = useRouterWithFlash()

    const table = [
        { label: "Code", data: "code", highlight: true, render: renderLink },
        { label: "Name", data: "name", },
        { label: "Description", data: "description", orderable: false },
        { label: "Actions", data: "id", orderable: false, render: renderActions }
    ]

    useEffect(() => {
        setTopbarActions(<MainTopbarActions />)
        router.showFlashIfAny()
    }, [])

    return (
        <LazyTable columns={table} hook={getClassrooms} title="Classrooms Data" />
    )
};

const renderLink = (value, data) => {
    return <Link href={route.url('classroomsDetail', { id: data.id })}>{value}</Link >
}

const renderActions = (id, data) => {
    return (
        <FlatTableAction
            show={route.url('classroomsDetail', { id: id })}
            edit={route.url('classroomsEdit', { id: id })}
            remove={route.url('classroomsDetail', { id: id })}
        />
    )
}
