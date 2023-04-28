export default function TopbarLabel({children, ...props}) {
    return (
        <div className="text-base font-normal text-gray-900 flex items-center dark:text-gray-400" {...props}>
            {children}
        </div>
    )
};
