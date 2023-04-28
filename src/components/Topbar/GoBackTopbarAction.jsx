import { HiArrowLeftCircle } from "react-icons/hi2";
import TopbarLabel from "@/components/Topbar/TopbarLabel";
import TopbarLink from "@/components/Topbar/TopbarLink";

export default function GoBackTopbarAction({href, title}) {
    return (
        <>
            <TopbarLink href={href}>
                <HiArrowLeftCircle className="h-6 w-6 mr-1" />
                <span className="ml-1">Go Back</span>
            </TopbarLink>
            <TopbarLabel>|</TopbarLabel>
            <TopbarLabel>
                {title}
            </TopbarLabel>
        </>
    )
};
