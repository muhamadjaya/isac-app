import Link from "next/link";

export default function TopbarLink({ href, classname = "", children, ...props }) {
    return (
        <Link
            href={href}
            className={`text-base font-normal text-gray-900 dark:hover:text-white flex items-center dark:text-gray-400 ${classname}`}
            {...props}
        >
            {children}
        </Link>
    )
}
