//Created by Swati
import PayrollDetailsForm from "./PayrollDetailsForm";
import PayrollDetailsTable from "./PayrollDetailsTable";

export default function NewBankTransferPopup({
  newBankTransferData,
  employeeList,
  handlePrevious,
  handleNext,
  saveHandler,
}) {
  return (
    <div
      className={` lg:w-[1000px] md:w-[800px] w-[400px]   flex flex-col justify-center gap-4`}
    >
      <PayrollDetailsTable
        newBankTransferData={newBankTransferData}
        employeeList={employeeList}
      />
      <PayrollDetailsForm
        newBankTransferData={newBankTransferData}
        employeeList={employeeList}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        saveHandler={saveHandler}
      />
    </div>
  );
}
