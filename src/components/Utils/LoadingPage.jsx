import { Spinner } from "flowbite-react";

export default function LoadingPage() {
    return (
        <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 dark:border-gray-700 min-w-screen ease-in-out duration-300">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    )
}
