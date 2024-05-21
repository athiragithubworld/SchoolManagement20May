import * as XLSX from "xlsx";

const useTimeTableDownloader = () => {
    const downloadExcel = (data, fileName, heading) => {
        if (!Array.isArray(data) || data.length === 0) {
            console.error("Data should be a non-empty array.");
            return;
        }

        // Define the order of days
        const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

        // Create a new workbook and a worksheet
        const workbook = XLSX.utils.book_new();
        const worksheetData = [];

        // Add the heading row if provided
        if (heading) {
            worksheetData.push([heading]);
            worksheetData.push([]); // Empty row after heading
        }

        // Extract unique timing values for the header
        const uniqueTimings = [...new Set(data.map(item => item.timing))];
        const header = ['Day', ...uniqueTimings];
        worksheetData.push(header);

        // Create rows for each day in order
        daysOfWeek.forEach(day => {
            const row = [day];
            uniqueTimings.forEach(timing => {
                const entry = data.find(item => item.day === day && item.timing === timing);
                row.push(entry ? `${entry.subject} (${entry.name})` : '');
            });
            worksheetData.push(row);
        });

        // Convert the data to a worksheet
        const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

        // Append the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Schedule');

        // Generate the Excel file and trigger the download
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    return downloadExcel;
};

export default useTimeTableDownloader;
