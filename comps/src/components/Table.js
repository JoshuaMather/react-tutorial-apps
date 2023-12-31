import { Fragment } from "react";

function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((col) => {
        if (col.header) {
            return <Fragment key={col.label}>{col.header()}</Fragment>;
        }
        
        return <th key={col.label}>{col.label}</th>
    })

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((col) => {
            return <td className="p-2" key={col.label}>{col.render(rowData)}</td>
        })

        return (
            <tr key={keyFn(rowData)} className="border-b">
                {renderedCells}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;