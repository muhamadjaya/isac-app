import { Table } from "flowbite-react"

export default function TableLoading({ total = 1 }) {
    let skeletons = []
    for (let i = 0; i < total; i++) {
        skeletons.push((<Skeleton key={`tbskeleton${i}`} />))

    }
    return <>{ skeletons }</>
}

export const Skeleton = () => {
    return (
        <Table.Row className="hover:bg-transparent dark:hover:bg-transparent">
            <Table.Cell className="td-highlight text-center px-0" colSpan={15}>
                <div
                    role="status"
                    className="w-full  divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 dark:border-gray-700"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-full">
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
            </Table.Cell>
        </Table.Row>
    )
}
