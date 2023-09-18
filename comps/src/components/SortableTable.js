import { useState } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

function SortableTable(props) {
    const { config, data } = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        if (sortBy && label != sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if (sortOrder===null){
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder==='asc'){
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder==='desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const udpatedConfig = config.map((col) => {
        if(!col.sortValue) {
            return col;
        }

        return {
            ...col,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(col.label)}>
                <div className="flex items-center">
                    {getIcons(col.label, sortBy, sortOrder)}
                    {col.label}
                </div>
            </th>
        }
    })

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(col => col.label===sortBy);
        sortedData = [...data].sort((a,b) => {
            const valA = sortValue(a);
            const valB = sortValue(b);

            const reverseOrder = sortOrder==='asc' ? 1 : -1;

            if (typeof valA === 'string') {
                return valA.localeCompare(valB) * reverseOrder;
            } else {
                return (valA - valB) * reverseOrder;
            }
        })
    }

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