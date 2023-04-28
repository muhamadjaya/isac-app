import { useAppLayoutContext } from "@/components/Layouts/AppLayout"
import { useEffect } from "react"
import MainTopBarActions from "../components/MainTopBarActions"

export default function MainIndex() {
    const { setTopbarActions } = useAppLayoutContext()

    useEffect(() => {
        setTopbarActions(<MainTopBarActions />)
    }, [])

    return (
        <div className="max-w-7xl sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="bg-white border-b border-gray-200">
                    You're logged in!
                </div>
            </div>
        </div>
    )
};
