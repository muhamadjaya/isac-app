import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

import BaseAuthenticatedLayout from '@/components/Layouts/BaseAuthenticatedLayout'
import Head from 'next/head'
import route from '@/application/route'
import SidebarWithLogo from '@/components/Sidebar/SidebarWithLogo'
import Topbar from '@/components/Topbar/Topbar'
import NotificationContainer from '../Utils/NotificationContainer';

export const AppLayoutContext = createContext({
    topbarActions: null,
    setTopbarActions: () => {}
})

export const useAppLayoutContext = () => useContext(AppLayoutContext)

export default function AppLayout({ children, title = "Isacapp"}) {
    const currentPath = useRouter().pathname
    const menu = route.getNavigableItems(currentPath)
    const [topbarActions, setTopbarActions] = useState(null)

    return (
        <BaseAuthenticatedLayout>
            <NotificationContainer />
            <Head>
                <title>{title} - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <SidebarWithLogo menu={menu} />
            <div className="sm:ml-64">
                <Topbar topbarActions={topbarActions} />
                <div className="p-8">
                    <AppLayoutContext.Provider value={{ topbarActions, setTopbarActions }}>
                        {children}
                    </AppLayoutContext.Provider>
                </div>
            </div>
        </BaseAuthenticatedLayout>
    )
}
