import { defineConfig } from 'vite';
 
export default defineConfig({
  optimizeDeps: {
    include: [
      'ag-grid-community/styles/ag-grid.css',
      'ag-grid-community/styles/ag-theme-quartz.css'
    ]
  }
}); 