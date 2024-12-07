import PropTypes from "prop-types";
import { useTable } from "react-table";

const MyCampaignTable = ({ campaigns, columns }) => {
  const tableInstance = useTable({ columns, data: campaigns });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="overflow-x-auto shadow">
      <table
        {...getTableProps()}
        className="min-w-full bg-white border border-gray-500 rounded-lg "
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="px-4 py-3 text-gray-600 uppercase tracking-wider border text-center bg-indigo-50"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="hover:bg-gray-50 text-center"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.id}
                    className="px-4 py-4 border text-sm text-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
MyCampaignTable.propTypes = {
  campaigns: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default MyCampaignTable;
