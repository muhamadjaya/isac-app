import { Table } from "flowbite-react"
import { useState } from "react"

import Tbody from "./Tbody"
import Thead from "./Thead"
import TableTopPanel from "./TableTopPanel"
import TablePagination from "./TablePagination"

export default function LazyTable({ hook, columns, title = "" }) {
    const [params, setParams] = useState({
        page: 1,
        search: ''
    })

    const onSearch = (search) => {
        setParams({ ...params, search })
    }

    const onOrderChange = (order) => {
        const curDirr = params?.dir
        const dir = !curDirr || curDirr === 'desc' ? 'asc' : 'desc'
        setParams({ ...params, order, dir })
    }

    const onPageChange = (page) => {
        setParams({...params, page})
    }

    const {
        data, error, meta, status
    } = hook(params)

    return (
        <>
            <TableTopPanel
                title={title}
                searchValue={params.search}
                onSearch={onSearch}
            />
            <Table>
                <Thead onOrderChange={onOrderChange} headers={columns} />
                <Tbody data={data} status={status} columns={columns} />
            </Table>
            <TablePagination meta={meta} onPageChange={onPageChange} />
        </>
    )
};
