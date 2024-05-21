// Created by Athira
//made responsive by sravanthi
//updated functionality by gunjan

// Component for displaying bank details
function BankDetail({ label, value,handleChange, bankData,type }) {
  return (
    <div className="flex gap-2">
      {/* Bank detail label */}
      <div className="gap-0 my-auto text-lg text-customblack w-[104px]">{label}</div>
      {/* Bank detail value input */}
      <input
        type={type?type:'text'}
        className="justify-center p-3 text-center w-[200px] text-base bg-white rounded-2xl shadow-primary text-neutral-400  max-sm:w-[400px] max-md:w-[480px]"
        placeholder={value}
        autoComplete="off"
        onChange={handleChange}
        name={label.split(" ").join('').replace(/[^a-zA-Z]/g, '')}
        value={bankData[label.split(" ").join('').replace(/[^a-zA-Z]/g, '')]}
      />
    </div>
  );
}

export default function BankDetailsPopupPage({setBankData,bankData}) {
  // Array containing bank details
  const bankDetails = [
    { label: "Bank Name", value: "State Bank Of India" },
    { label: "BankAC. No", value: "555555555" },
    { label: "IFSC Code", value: "9999999999999999" },
    { label: "Branch", value: "3218421852" },
    { label: "Bank Add.", value: "555555555" },
    { label: "CIF No", value: "9999999999999999" },
    { label: "PF. No", value: "3218421852" },
    { label: "UAN No", value: "555555555" },
    { label: "ESI No", value: "9999999999999999" },
  ];
  const handleChange = (event)=>{
    setBankData(prevDetails => {
      return {
        ...prevDetails,
        [event.target.name] : event.target.value
      }
    })
  }
  return (
    <div className="max-md:overflow-y-auto scrollbarnone  max-md:flex-wrap max-md:h-[300px] ">
    <main className="flex flex-col gap-2 max-md:flex-wrap ">
      {/* Bank details title */}
      <h2 className="gap-0 mt-1 w-full text-lg font-bold leading-5 text-customblack max-md:flex-wrap max-md:max-w-full">
        Bank Details
      </h2>
      {/* Displaying first 3 bank details */}
      <section className="flex gap-5 justify-between  mt-3 leading-[120%] max-md:flex-wrap max-md:mr-1 ">
      <BankDetail  label="Bank Name"  handleChange={(e) => {
              // Allow only alphabetic characters
              if (/^[a-zA-Z\s]*$/.test(e.target.value) || !e.target.value) {
                handleChange(e);
              }}} bankData={bankData}/>
      <BankDetail  label="BankAC. No" type={'number'} handleChange={handleChange} bankData={bankData}/>
      <BankDetail  label= "IFSC Code" handleChange={(e) => {
              const newValue = e.target.value;
              if (!newValue || newValue.length <= 11) {
                handleChange(e);
              }
            }} bankData={bankData}/>
      </section>
      {/* Displaying next 3 bank details */}
      <section className="flex gap-5 justify-between  mt-3 leading-[120%] max-md:flex-wrap max-md:mr-1 ">
          <BankDetail label={'Branch'} handleChange={handleChange} bankData={bankData} />
          <BankDetail label={'Bank Add.'} handleChange={handleChange} bankData={bankData} />
          <BankDetail label={'CIF No'} handleChange={handleChange} bankData={bankData} type={'number'} />

      </section>
      {/* Displaying next 3 bank details */}
      <section className="flex gap-5 justify-between  mt-3 leading-[120%] max-md:flex-wrap max-md:mr-1 max-md:mb-1">
        <BankDetail  label="PF. No" handleChange={handleChange} type={'number'} bankData={bankData}/>
        <BankDetail  label= "UAN No" handleChange={(e) => {
              const newValue = e.target.value;
              if (!newValue || newValue.length <= 12) {
                handleChange(e);
              }
            }} type={'number'} bankData={bankData}/>
          <BankDetail  label="ESI No" handleChange={handleChange} type={'number'} bankData={bankData}/>
      </section>
    </main></div>
  );
}
