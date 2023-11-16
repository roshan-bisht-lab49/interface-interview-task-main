import ReactDOM from 'react-dom'
import React from 'react'
import GlobalStyling from './fundamentals/GlobalStyling'
import DataTable from './components/dataTable/DataTable';
import { useGetTableData } from './useGetTableData';
import { useEffect, useState } from 'react';
import { TableData, getTableData } from './services';
import { isEmpty } from './utils';

const App: React.FC = () => {
  const [tableData, setTableData] = useState<TableData[]>([]);
  useEffect(() => {
    async function getData() {
      const data = await getTableData();
      setTableData(data);
    };

    if (isEmpty(tableData)) {
      getData();
    }
  }, []);
  const { columns } = useGetTableData(tableData);
  return (
    <>
      <GlobalStyling />
      <h1>Interface Interview Task for</h1>
      <DataTable data={tableData} columns={columns} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
