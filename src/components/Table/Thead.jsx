import LoopRender from "@/components/Helpers/LoopRender";
import { Table } from "flowbite-react";
import { HiChevronUpDown } from "react-icons/hi2";
import Show from "../Helpers/Show";

export default function Thead({ headers, onOrderChange = (h) => {} }) {
    return (
        <Table.Head>
            <LoopRender data={headers} render={renderTableCells} include={onOrderChange} />
        </Table.Head>
    )
}

const renderTableCells = (header, i, onOrderChange) => {
    return (
        <Table.HeadCell key={i}>
            <div className="flex flex-row justify-between items-center" data-id={header.data}>
                <span>{header.label}</span>
                <Show when={header?.orderable !== false}>
                    <div className="hover:text-gray hover:dark:text-white cursor-pointer">
                        <HiChevronUpDown onClick={() => onOrderChange(header.data)} />
                    </div>
                </Show>
            </div>
        </Table.HeadCell>
    )
}
