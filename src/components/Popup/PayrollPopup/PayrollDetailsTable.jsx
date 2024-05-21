// Created By Swati.
import { useEffect, useState } from "react";

const PayrollDetailsTable = ({ newBankTransferData }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    //set the table data according to employees selected.
    setTableData(newBankTransferData.selectedEmployees);
  }, []);

  return (
    <div
      className={`p-3 shadow-containerShadow md:shadow-containerShadow w-full h-[200px] rounded-[1.25rem] scrollbarnone`}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="overflow-x-auto scrollbarnone sm:-mx-5 lg:-mx-7">
          <div className="inline-block min-w-full  sm:px-5 lg:px-7">
            <div className="overflow-hidden">
              <table className="w-full flex flex-col gap-[10px]">
                <thead className="pr-2">
                  <tr className="w-full p-3 h-[74px] rounded-[14px] flex border-[1px] items-center justify-between bg-blue-100 shadow-md text-lg">
                    <th className="w-40 h-fit text-custom text-center font-bold">
                      S No.
                    </th>
                    <th className="w-40 h-fit text-custom text-center font-bold">
                      Name
                    </th>
                    <th className=" w-40 h-fit text-custom text-center font-bold">
                      Employee no
                    </th>
                    <th className="w-40 h-fit text-custom text-center font-bold">
                      Bank
                    </th>
                    <th className="w-40 h-fit text-custom text-center font-bold">
                      Branch
                    </th>
                    <th className="w-40 h-fit text-custom text-center font-bold">
                      IFSC Code
                    </th>
                    <th className="w-40 h-fit text-custom text-center font-bold">
                      Acc. No
                    </th>
                    <th className="w-40 h-fit text-custom text-center font-bold">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="flex flex-col gap-[10px] w-full overflow-y-scroll SCROLLBAR max-h-[100px] py-1 pr-2">
                  {tableData.map((emp) => {
                    return (
                      <tr
                        key={emp.id}
                        className="w-full p-3 h-[52px] rounded-[14px] flex border-[1px] items-center justify-between shadow-md"
                      >
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.id}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.facultyName}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.facultyId}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.bankName}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.branch}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.ifsc}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.bankAc}
                        </td>
                        <td className="w-40 h-fit text-custom lg:text-custom text-center font-normal">
                          {emp.amount}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollDetailsTable;
