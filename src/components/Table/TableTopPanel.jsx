import SearchInput from "./SearchInput";
import PageTitle from "@/components/Typography/PageTitle";

export default function TableTopPanel({ onSearch, searchValue = "", title = ""}) {
    return (
        <div className={`flex items-center justify-between pb-4`}>
            <div>
                <PageTitle text={title} />
            </div>
            <div className="flex items-center justify-end space-x-3">
                <SearchInput value={searchValue} onSearch={onSearch} />
            </div>
        </div>
    )
}
