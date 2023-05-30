import { ColDef } from "ag-grid-community";

export const MESSAGE_LIST_GRID_COL_DEFS: ColDef[] = [
    { 
        field: 'id',
        hide: true,
        headerName: 'ID'
    },
    {
        field: 'text',
    },
    {
        field: 'category',
    },
    {
        field: 'status',
        headerName: 'status',
    },
    {
        field: 'createdAt',
    },
    {
        field: 'updatedAt',
    },
]



export const APPROVED_MESSAGE_LIST_GRID_COL_DEFS: ColDef[] = [
    { 
        field: '',
        checkboxSelection: true,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true
       
    },
    { 
        field: 'id',
        hide: true,
        headerName: 'ID'
    },
    {
        field: 'text',
    },
    {
        field: 'category',
    },
    {
        field: 'status',
        headerName: 'status',
    },
    {
        field: 'createdAt',
    },
    {
        field: 'updatedAt',
    },
]