import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'מספר הזמנה', width: 90 },
  {
    field: 'time',
    headerName: 'זמן הגעה',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'שם מנה',
    width: 150,
    editable: true,
  },
  {
    field: 'table',
    headerName: 'מסעדה',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'מחיר',
    sortable: false,
    width: 160,
    
  },
  {
    field: 'count',
    headerName: 'כמות',
    sortable: false,
    width: 160,
    
  }
];

var rows=[] ;

export default function DataGridDemo() {

  interface LocationState {
    resturant : string
  }

  const state = useLocation().state as LocationState;

  const resname = state.resturant
  
  
  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  getRows()
    return () => { ignore = true; }
    },[]);

  const [rows, setRows] = useState([])



  function getRows() {
    
    // Simple GET request using fetch
    fetch('https://speedclient.herokuapp.com/orders')
          .then(response => response.json()).then(r => setRows(r))   
  }


    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      
    );
}
