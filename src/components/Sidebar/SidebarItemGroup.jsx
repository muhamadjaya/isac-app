import SidebarLink from "@/components/Sidebar/SidebarLink"
import LoopRender from "@/components/Helpers/LoopRender"
import { Sidebar } from "flowbite-react"

const renderNavlink = (item, index) => {
    return (
        <SidebarLink {...item} key={index} />
    )
}

const SidebarItemGroup = ({ items }) => {
    return (
        <Sidebar.ItemGroup>
            <LoopRender data={items} render={renderNavlink} />
        </Sidebar.ItemGroup>
    )
}

export default SidebarItemGroup
