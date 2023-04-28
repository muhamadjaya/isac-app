import {
    HiOutlineArrowDownCircle, HiOutlineArrowUpCircle, HiOutlinePlusCircle
} from "react-icons/hi2";

import TopbarLink from "@/components/Topbar/TopbarLink";
import teachersRoute from "@/features/Teachers/app/teachersRoute";

export default function MainTopbarActions() {
    return (
        <>
            <TopbarLink href={teachersRoute.url('teachersCreate')}>
                <HiOutlinePlusCircle className="h-6 w-6 mr-1" />
                <span className="ml-1">New Data</span>
            </TopbarLink>
            <TopbarLink href={teachersRoute.url('teachersCreate')}>
                <HiOutlineArrowUpCircle className="h-6 w-6 mr-1" />
                <span className="ml-1">Export</span>
            </TopbarLink>
            <TopbarLink href={teachersRoute.url('teachersCreate')}>
                <HiOutlineArrowDownCircle className="h-6 w-6 mr-1" />
                <span className="ml-1">Import</span>
            </TopbarLink>
        </>
    )
}
