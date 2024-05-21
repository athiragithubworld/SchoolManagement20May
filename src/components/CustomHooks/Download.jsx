import * as XLSX from "xlsx";

const useFileDownloader = () => {
  const downloadFile = (downloadData,name,customHeading) => {
    if (!downloadData) {
      console.error("Data is not available");
      return;
    }

    // Extracting headers from the first object in the array
    const headers = Object.keys(downloadData[0]);
    // Extracting values for each object
    const dataRows = downloadData.map((obj) =>
      headers.map((header) => obj[header])
    );

    //For inserting heading into the file
    const headingRow = [customHeading];


    // Inserting headers as the first row of the data
    const data = [headingRow,headers, ...dataRows];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${name}.xlsx`);
  };

  return downloadFile;
};

export default useFileDownloader;
