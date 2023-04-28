import Icon from "@/components/Helpers/Icon";

export default function SearchInput({ onSearch, value = "" }) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon name="HiMagnifyingGlass" className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
                type="text"
                value={value ?? ""}
                onChange={(el) => onSearch(el.target.value)}
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
            />
        </div>
    )
}
