import { Tooltip } from "flowbite-react";
import { HiCog, HiEye, HiTrash } from "react-icons/hi2";
import Link from "next/link";

export default function FlatTableAction({ edit = null, remove = null, show = null }) {
    return (
        <div className="flex flex-row space-x-2">
            <Link href={edit}>
                <Tooltip content="Edit data" style="light">
                    <HiCog />
                </Tooltip>
            </Link>
            <Link href={remove}>
                <Tooltip content="Show data" style="light">
                    <HiEye />
                </Tooltip>
            </Link>
            <Link href={show}>
                <Tooltip content="Delete data" style="light">
                    <HiTrash />
                </Tooltip>
            </Link>
        </div>
    )
};
