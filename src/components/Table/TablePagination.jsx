import Show from "@/components/Helpers/Show"
import { Pagination } from "flowbite-react"

export default function TablePagination({ meta, onPageChange }) {
    return (
        <Show when={meta?.current_page && meta?.total}>
            <div className="flex items-center justify-between py-2">
                <span
                    className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {meta?.from} to {meta?.to}</span> of <span className="font-semibold text-gray-900 dark:text-white">{meta?.total} entries
                    </span>
                </span>
                <Pagination onPageChange={onPageChange} currentPage={meta?.current_page ?? 1} totalPages={meta?.last_page ?? 1} />
            </div>
        </Show>
    )
}
