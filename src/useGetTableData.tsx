import { TableData } from './services';
import { DataColumn } from './components/dataTable/DataTable';

export function useGetTableData(tableData: TableData[]) {
    function getFormattedData() {
        const tableHeaderKeys = Object.keys(tableData[0] ?? {});
        const tableRows: DataColumn<any>[] = tableHeaderKeys
            .filter(header => header !== "id")
            .map((tableHeader) => {
                return {
                    headerText: tableHeader.slice(0, 1).toUpperCase() + tableHeader.slice(1, tableHeader.length),
                    sortField: tableHeader,
                    renderCell: (data: any) => {
                        if (Array.isArray(data[tableHeader])) {
                            return data[tableHeader].join(", ")
                        } else if (typeof data[tableHeader] === "boolean") {
                            return data[tableHeader] === true ? "Yes" : "No";
                        } else if (typeof data[tableHeader] === "number") {
                            return data[tableHeader] === 0 ? "-" : data[tableHeader];
                        } else {
                            return data[tableHeader];
                        }
                    }
                }
            });

        return tableRows;
    }


    return {
        columns: getFormattedData(),
    }
}