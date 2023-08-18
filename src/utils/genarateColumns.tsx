import { GridColDef } from "@mui/x-data-grid";

export function generateColumns(): GridColDef[] {
    return [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'userId', headerName: 'User Id', width: 90 },
      { field: 'title', headerName: 'Title', width: 500, editable: false},
      { field: 'body', headerName: 'Body', width: 500, editable: false },
     
    ];
  }