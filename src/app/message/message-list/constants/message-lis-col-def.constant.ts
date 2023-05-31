import { ColDef } from "ag-grid-community";
import { getFormattedDate } from "../utils";

export const MESSAGE_LIST_GRID_COL_DEFS: ColDef[] = [
    { 
        field: 'id',
        hide: true,
        headerName: 'ID',
      
    },
    {
        field: 'text',
        sortable: true,
        filter: "agTextColumnFilter",
        resizable: true,
    },
    {
        field: 'category',
        filter: "agTextColumnFilter",
        sortable: true,
        resizable: true,
    },
    {
        field: 'status',
        sortable: true,
        filter: "agTextColumnFilter",
        resizable: true,
    },
    {
        field: 'createdAt',
        sortable: true,  
         filter: "agTextColumnFilter",
        valueFormatter: getFormattedDate,
        resizable: true,
    },
    {
        field: 'updatedAt',
        sortable: true,
        filter: "agTextColumnFilter",
        valueFormatter: getFormattedDate,
        resizable: true,

    },
]


export const APPROVED_MESSAGE_LIST_GRID_COL_DEFS: ColDef[] = [
    { 
        field: '',
        checkboxSelection: true,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        maxWidth: 40
       
    },
   ... MESSAGE_LIST_GRID_COL_DEFS
]
export const PENDING_MESSAGE_LIST_GRID_COL_DEFS: ColDef[] = [
   ... MESSAGE_LIST_GRID_COL_DEFS
]