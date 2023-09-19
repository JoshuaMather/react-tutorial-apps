import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort({data, config});

    const udpatedConfig = config.map((col) => {
        if(!col.sortValue) {
            return col;
        }

        return {
            ...col,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(col.label)}>
                <div className="flex items-center">
                    {getIcons(col.label, sortBy, sortOrder)}
                    {col.label}
                </div>
            </th>
        }
    })

    

    return (
        <div>
            <Table {...props} config={udpatedConfig} data={sortedData} />
        </div>
    ) 
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>
    } else if (sortOrder === 'asc'){
        return <div>
            <GoArrowUp />
        </div>
    } else if (sortOrder === 'desc'){
        return <div>
            <GoArrowDown />
        </div>
    }
}

export default SortableTable