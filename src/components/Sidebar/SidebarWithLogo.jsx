import { Sidebar } from "flowbite-react"
import Image from "next/image";
import Logo from '@/assets/images/logo.svg'
import LoopRender from "@/components/Helpers/LoopRender";
import SidebarItemGroup from "@/components/Sidebar/SidebarItemGroup";

export default function SidebarWithLogo({ menu = [] }) {
    return (
        <Sidebar className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-800 -translate-x-full sm:translate-x-0 overflow-y-auto" aria-label="Sidebar">
            <div className="flex items-center pl-2.5 mb-3">
                <Image style={{ width: 'auto' }} className="h-6 mr-3 sm:h-7" src={Logo} alt="Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </span>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Sidebar.Items>
                <Sidebar.Items>
                    <LoopRender data={menu} render={renderSidebarItemGroup} />
                </Sidebar.Items>
            </Sidebar.Items>
        </Sidebar>
    )
}

const renderSidebarItemGroup = (items, index) => {
    return <SidebarItemGroup items={items} key={index} />
}
