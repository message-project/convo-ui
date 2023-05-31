import { ValueFormatterParams } from 'ag-grid-community';

export const getFormattedDate = (params: ValueFormatterParams) =>
  params.value ? new Date(params.value).toUTCString() : '';

  export const formatStatus = (params: any) => {
    const  status = params.value as string
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()
  }