import { Spinner } from "flowbite-react";

export default function ContentSpinner() {
    return (
        <div className="w-full flex flex-col text-center top-50">
            <Spinner className="mb-3"/>
            <small className="text-xs text-gray-700 dark:text-gray-400">Please wait..</small>
        </div>
    )
}
