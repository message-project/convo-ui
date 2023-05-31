import { GridOptions, ValueFormatterParams } from "ag-grid-community";



export declare const COMMON_COLUMN_TYPES: {
    default: {
        type: string,
        sortable: boolean,
        filter: boolean,
        resizable: boolean,
        floatingFilter: boolean;
        filterParams: {
            newRowsActions: string;
            suppressAndOrCondition: boolean;
            buttons: string[]
        }
    };
    set : {
        filter: boolean
    };
    text: {
        filter: string
    };
    number: {
        filter: string
    };
    date: {
        width: number;
        minWidth: number;
        filter: string;
        valueFormatter: (params: ValueFormatterParams) => string;
        filterParams: {
            comparator: (filterLocalDate: Date, cellValue: Date) => 0 | 1 | -1;
        };
    }
}

export const MESSAGE_GRID_OPTIONS: GridOptions = {
    rowHeight: 36,
    suppressColumnVirtualisation: true,
    rowMultiSelectWithClick: true,
    cacheBlockSize: 50,
    enableCellTextSelection: true,
    ensureDomOrder: true,
    // rowSelection: 'multiple',
  
}