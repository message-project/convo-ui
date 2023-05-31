import { ValueFormatterParams } from "ag-grid-community";

export const getFormattedDate = (params: ValueFormatterParams) => params.value ? new Date(params.value).toUTCString() : ''