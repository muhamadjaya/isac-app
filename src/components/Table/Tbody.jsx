import { Table } from "flowbite-react"
import collect from "collect.js"
import LoopRender from "@/components/Helpers/LoopRender"
import Show from "@/components/Helpers/Show"
import TableEmpty from "./TableEmpty"
import TableLoading from "./TableLoading"

export default function Tbody({ columns, data = [], status = 'loading', skeleton = 4 }) {
    return (
        <Table.Body>
            <Show when={status === 'loading'}>
                <TableLoading total={skeleton} />
            </Show>
            <Show when={status === "success" && data.length > 0}>
                <LoopRender data={data} render={renderRows} include={columns} />
            </Show>
            <Show when={status === "success" && data.length === 0}>
                <TableEmpty colspan={columns?.length || 15}/>
            </Show>
        </Table.Body>
    )
}

const renderRows = (data, index, columns) => {
    const dataKeys = collect(columns).pluck('data').toArray()
    return (
        <Table.Row className="table-row" key={data?.id ?? index}>
            {
                dataKeys.map((attr, key) => {
                    const shouldRender = typeof columns[key]?.render === 'function'
                    const value = data[attr]
                    return (
                        <Table.Cell key={`tc${key}`}>
                            {
                                !shouldRender ? value : columns[key].render(value, data)
                            }
                        </Table.Cell>
                    )
                })
            }
        </Table.Row>
    )
}
