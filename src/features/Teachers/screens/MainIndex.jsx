import { Avatar } from "flowbite-react";
import { useAppLayoutContext } from "@/components/Layouts/AppLayout";
import { useEffect } from "react";

import LazyTable from "@/components/Table/LazyTable";
import Link from "next/link";
import MainTopbarActions from "@/features/Teachers/components/MainTopbarActions";
import teachersRoute from "@/features/Teachers/app/teachersRoute";
import useTeachers from "@/features/Teachers/app/teachersHook";

export default function MainIndex() {
    const { setTopbarActions } = useAppLayoutContext()
    const { getTeachers } = useTeachers()

    const table = [
        { label: "", data: "photo", render: renderAvatar },
        { label: "Name", data: "name", highlight: true, render: renderLink },
        { label: "Number", data: "number" },
        { label: "Join Date", data: "join_date" },
    ]

    useEffect(() => {
        setTopbarActions(<MainTopbarActions />)
    }, [])

    return (
        <LazyTable columns={table} hook={getTeachers} title="Teacher Data" />
    )
}

const renderAvatar = (value) => {
    return <Avatar img={value} rounded={true} bordered={true} />
}

const renderLink = (value, data) => {
    return <Link href={teachersRoute.url('teachersDetail', { id: data.id })}>{ value }</Link >
}
