import {
    HiOutlineArrowDownCircle, HiOutlineArrowUpCircle, HiOutlinePlusCircle
} from "react-icons/hi2";

import TopbarLink from "@/components/Topbar/TopbarLink";
import route from "@/features/Classrooms/app/classroomsRoute";

export default function MainTopbarActions() {
    return (
        <>
            <TopbarLink href={route.url('classroomsCreate')}>
                <HiOutlinePlusCircle className="h-6 w-6 mr-1" />
                <span className="ml-1">New Data</span>
            </TopbarLink>
            <TopbarLink href={route.url('classroomsCreate')}>
                <HiOutlineArrowUpCircle className="h-6 w-6 mr-1" />
                <span className="ml-1">Export</span>
            </TopbarLink>
            <TopbarLink href={route.url('classroomsCreate')}>
                <HiOutlineArrowDownCircle className="h-6 w-6 mr-1" />
                <span className="ml-1">Import</span>
            </TopbarLink>
        </>
    )
}
