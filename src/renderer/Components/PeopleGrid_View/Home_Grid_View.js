import React from 'react'
import RowSelectTable, {
  getActions,
  getReucer,
  selectors,
} from 'mui-row-select-table'
import { prop } from 'ramda'
import './style.css'

const column = (name, headerCellContent, other = {}) => ({
  name,
  headerCellContent,
  sortable: true,
  ...other,
})

const results = [
  { id: 0, first_name: 'Leia', last_name: 'Skywalker', home_planet: 'Naboo' },
  { id: 1, first_name: 'Darth', last_name: 'Vader', home_planet: 'Tatooine' },
  {
    id: 2,
    first_name: 'Luke',
    last_name: 'Skywalker',
    home_planet: 'Tatooine',
  },
  { id: 3, first_name: 'Han', last_name: 'Solo', home_planet: 'Unknown' },
  { id: 4, first_name: 'Rey', last_name: '', home_planet: 'Jakku' },
  { id: 5, first_name: 'Kylo', last_name: 'Ren', home_planet: 'Unknown' },
]

const CustomComponent = () => <i className="material-icons">remove_red_eye</i>

const renderAction = () => <CustomComponent />

const getColumnMetadata = () => [
  column('first_name', 'Location', {}),
  column('last_name', 'City', {}),
  column('home_planet', 'Zip', {}),
  column('action', 'Action', {
    sortable: false,
    display: renderAction,
    tdClassName: 'no-padding',
  }),
]

class RowSelectTableExample extends React.Component {
  state = {
    page: 0,
    pageSize: 20,
    sortColumn: 'first_name',
    sortAscending: true,
  }
  render() {
    return (
      <RowSelectTable
        rowSelectionEnabled={true}
        isAllRowsSelected={false}
        onSelectAllRows={() => console.log('All rows selected')}
        isRowSelected={() => false}
        sortColumn={this.state.sortColumn}
        columnMetadata={getColumnMetadata()}
        getRowId={rowData => prop('id', rowData)}
        onSelectRow={(...args) => console.log('Selected Row', args)}
        noDataMessage={() => <div>No results found.</div>}
        setPage={({ page, resultsPerPage }) => {
          this.setState({ pageSize: resultsPerPage, page })
          console.log('Set Page called', page, resultsPerPage)
        }}
        onRowClick={(rowData, e) => console.log('Do something')}
        results={results}
        isLoading={false}
        changeSort={(sortColumn, sortAscending) =>
          this.setState({ sortColumn, sortAscending })
        }
        setFilter={args => console.log(args)}
        resultCount={200}
        maxPage={20}
        sortAscending={this.state.sortAscending}
        pageSize={this.state.pageSize}
        currentPage={this.state.page}
        pageSizeOptions={[20, 40, 100]}
      />
    )
  }
}

export default RowSelectTableExample;
