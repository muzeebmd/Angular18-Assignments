import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, RowSelectionOptions } from 'ag-grid-community';
import { ModuleRegistry, TextFilterModule, NumberFilterModule, AllCommunityModule } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { provideGlobalGridOptions } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule, AllCommunityModule]);

// Set global grid options (legacy theme is set for now)
provideGlobalGridOptions({ theme: "legacy" });

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {
  gridApi: any;
  // Initialize grid API
  onGridReady(params: any) {
    this.gridApi = params.api;
   
  }
  // Export data as CSV
  onExport() {
    this.gridApi.exportDataAsCsv();
  }

  paginationPageSize = 10;
  pagination = true;
  paginationPageSizeSelector = [2, 5];

  rowClassRules = {
    'red-row': (params: any) => params.data?.make === 'Tesla'
  };

  // Sample JSON Data 
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 89600, electric: false },
    { make: "BMW", model: "X5", price: 60200, electric: false },
    { make: "Tesla", model: "EQC", price: 83500, electric: true },
    { make: "Chevrolet", model: "Bolt EV", price: 36900, electric: true },
    { make: "Nissan", model: "Leaf", price: 29990, electric: true },
    { make: "Audi", model: "Q7", price: 86500, electric: false },
    { make: "Tesla", model: "Taycan", price: 81800, electric: true },
    { make: "THyundai", model: "EQC", price: 29500, electric: false },
    { make: "Kia", model: "EV6", price: 47000, electric: true },
    { make: "Mercedes-Benz", model: "EQS", price: 102000, electric: true },
    { make: "Honda", model: "Civic", price: 24000, electric: false }
  ];

  // Column Definitions: Defines the columns to be displayed
  colDefs: ColDef[] = [

    {
      field: "make", headerName: "Company", sortable: true, filter: true, floatingFilter: true, cellEditor: "agSelectCellEditor", cellEditorParams: { values: ['Tesla', 'Ford', 'Toyota'] },
    },
    { field: "model", headerName: "Model", cellEditor: "agSelectCellEditor", cellEditorParams: { values: ['corolla', 'F5', 'x-series', 'x7'] } },
    {
      field: "price",
      editable: true,
      valueFormatter: (p) => "$" + p.value,
      cellClassRules: { 'green-cell': (p) => p.value > 50000 },

      cellRenderer: (params: { value: any }) => `<span style="color: green; font-weight: bold;">$${params.value}</span>`
    },
    { field: "electric", headerName: "Electric", filter: 'agSetColumnFilter', sortable: true }
  ];

  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    editable: true,
    sortable: true,
    resizable: true,
    cellEditor: "agSelectCellEditor",

  }
  rowSelection: RowSelectionOptions={
    mode: 'multiRow'
  }
}
