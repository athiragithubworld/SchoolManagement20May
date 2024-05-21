import * as XLSX from "xlsx";

const usePopupDownloader = () => {
    const downloadFile = (dataObject, name, customHeading) => {
      if (!dataObject) {
        console.error("Data is not available");
        return;
      }
  
      // Extracting keys (headers) from the dataObject
      const headers = Object.keys(dataObject);
      // Extracting values from the dataObject
      const dataRows = [Object.values(dataObject)]; // Convert values into a single row
  
      // Inserting custom heading at the beginning of the data
      const headingRow = [customHeading]; // Create a single-element array with custom heading
      const data = [headingRow, headers, ...dataRows]; // Prepend the custom heading and append data
  
      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, `${name}.xlsx`);
    };
  
    return downloadFile;
  };
  

  export default usePopupDownloader;