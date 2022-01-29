import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import InputButton from '../InputButton';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'Image',
    headerName: 'Image',
    width: 70,
    // editable: true,
    renderCell: (params) => <img src={params.value} style={{borderWidth:'2px',borderColor:'blue',borderStyle:'solid',borderRadius:'30px'}} />,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'Role',
    headerName: 'Role',
    width: 110,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 195,
    editable: true,
  },
  {
    field: 'Adding_Date',
    headerName: 'Adding Date',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130,
  },
  {
    field: 'Update',
    headerName: 'Update',
    description: 'This will update the data cell.',
    sortable: false,
    width: 160,
    renderCell: (cellValues) => {
      return (
        <InputButton
        className="Create-Button"
        buttonStyle={{
        backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
        boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
        color: '#FFFFFF',
        width:100}} title=" Edit" />
      );
    }
  },
  {
    field: 'Delete',
    headerName: 'Delete',
    description: 'This will update the data cell.',
    sortable: false,
    width: 160,
    renderCell: (cellValues) => {
      return (
        <InputButton
        className="Create-Button"
        buttonStyle={{
        backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
        boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
        color: '#FFFFFF',
        width:100}} title="Delete" />
      );
    }
  },
];

const rows = [
  { id: 1, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Asghar',    firstName: 'Rehan',    Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022'},
  { id: 2, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Sarwar',    firstName: 'Azeem',    Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 3, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Zulfiqar',  firstName: 'Irtaza',   Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 4, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Stark',     firstName: 'Arya',     Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 5, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Targaryen', firstName: 'Daenerys', Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 6, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Melisandre',firstName: 'XYZ',      Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 7, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Clifford',  firstName: 'Ferrara',  Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 8, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Frances',   firstName: 'Rossini',  Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 9, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Roxie',     firstName: 'Harvey',   Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
