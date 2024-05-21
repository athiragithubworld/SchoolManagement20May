import CalenderButtons from "../../components/Buttons/CalenderButtons/CalenderButtons";
import CalenderTable from "../../components/Tables/CalenderTable/CalenderTable";

const Calender = () => {
  const numberOfDays = Array.from({ length: 35 }, (_, i) => i + 1);

  // Function to chunk the array into smaller arrays of specified size
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  // Chunk the numbers array into arrays of 7 elements each
  const rows = chunkArray(numberOfDays, 7);

  return (
    <div
      className={`p-3 flex flex-col
         gap-2 shadow-containerShadow md:shadow-containerShadow w-full h-full rounded-[1.25rem] scrollbarnone overflow-x-auto`}
    >
      <CalenderButtons />
      <CalenderTable rows={rows} />
    </div>
  );
};

export default Calender;
