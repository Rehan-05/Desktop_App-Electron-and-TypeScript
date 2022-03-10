import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import InputButton from '../InputButton';
import Icon from 'react-web-vector-icons';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 40, hide: true },
  { field: 'no', headerName: 'No', width: 55, },
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
    //width: 120,
    minWidth: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  {
    field: 'Role',
    headerName: 'Role',
    width: 90,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 195,
    editable: true,
  },
  // {
  //   field: 'Adding_Date',
  //   headerName: 'Adding Date',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 130,
  // },
  {
    field: 'Update',
    headerName: 'Update',
    description: 'This will update the data cell.',
    sortable: false,
    width: 80,
    renderCell: (cellValues) => {
      return (
        // <InputButton
        // className="Create-Button"
        // buttonStyle={{
        // backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
        // boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
        // color: '#FFFFFF',
        // width:100}} title=" Edit" />
        <div style={{marginLeft:20}}>


        <Icon  name='edit' font='AntDesign'  color='black'  size={25} // style={{}}
        />
        </div>

      );
    }
  },
  {
    field: 'Delete',
    headerName: 'Delete',
    description: 'This will update the data cell.',
    sortable: false,
    width: 80,
    renderCell: (cellValues) => {
      return (
        // <InputButton
        // className="Create-Button"
        // buttonStyle={{
        // backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
        // boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
        // color: '#FFFFFF',
        // width:100}} title="Delete" />
        <div style={{marginLeft:20}}>
          <Icon  name='delete' font='AntDesign'  color='black'  size={25} // style={{}}
        />
        </div>

      );
    }
  },
  {
    field: 'Share',
    headerName: 'Delete',
    description: 'This will update the data cell.',
    sortable: false,
    width: 80,
    renderCell: (cellValues) => {
      return (
        // <InputButton
        // className="Create-Button"
        // buttonStyle={{
        // backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
        // boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
        // color: '#FFFFFF',
        // width:100}} title="Delete" />
        <div style={{marginLeft:20}}>
          <Icon  name='sharealt' font='AntDesign'  color='black'  size={25} // style={{}}
        />
        </div>

      );
    }
  },
];

const rows = [
  { id: 1,no:1, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Asghar',    firstName: 'Rehan',    Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022'},
  { id: 2,no:2, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Sarwar',    firstName: 'Azeem',    Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 3,no:3, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Zulfiqar',  firstName: 'Irtaza',   Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 4,no:4, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Stark',     firstName: 'Arya',     Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 5,no:5, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Targaryen', firstName: 'Daenerys', Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 6,no:6, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Melisandre',firstName: 'XYZ',      Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 7,no:7, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Clifford',  firstName: 'Ferrara',  Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 8,no:8, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Frances',   firstName: 'Rossini',  Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 9,no:9, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Roxie',     firstName: 'Harvey',   Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 10,no:10, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Asghar',    firstName: 'Rehan',    Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022'},
  { id: 11,no:11, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Sarwar',    firstName: 'Azeem',    Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 12,no:12, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Zulfiqar',  firstName: 'Irtaza',   Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 13,no:13, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Stark',     firstName: 'Arya',     Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 14,no:14, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Targaryen', firstName: 'Daenerys', Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 15,no:15, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Melisandre',firstName: 'XYZ',      Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 16,no:16, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Clifford',  firstName: 'Ferrara',  Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 17,no:17, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Frances',   firstName: 'Rossini',  Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
  { id: 18,no:18, Image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=35",  lastName: 'Roxie',     firstName: 'Harvey',   Role: 'Employee', Email:'rehangoraya05@gmail.com', Adding_Date: '01/01/2022' },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 600, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
        disableSelectionOnClick/>
    </div>
  );
}
