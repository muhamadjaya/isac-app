import LoadingPage from '@/components/Utils/LoadingPage'
import Show from '@/components/Helpers/Show'

import { createContext, useContext } from 'react'
import { useAuth } from '@/application/hook'

export const BaseAuthenticatedLayoutContext = createContext({
    user: {},
    logout: () => { },
})
export const useBaseAuthenticatedLayoutContext = () => useContext(BaseAuthenticatedLayoutContext)
export default function BaseAuthenticatedLayout({ children }) {
    const { user, logout } = useAuth({ middleware: 'auth' })
    return (
        <Show when={user} fallback={<LoadingPage />}>
            <BaseAuthenticatedLayoutContext.Provider value={{ user, logout }}>
                {children}
            </BaseAuthenticatedLayoutContext.Provider>
        </Show>
    )
}
