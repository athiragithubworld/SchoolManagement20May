import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import ManageHolidayorEventPopup from '../../components/Popup/CalenderPopup/ManageHolidayorEventPopup';

const ManageHolidays = () => {

    const [modalOpen,setModalOpen] = useState(true);
    
    const handleClose=()=>{
        setModalOpen(false);
    }
  return (
    <div>
      <Modal onClose={handleClose} isOpen={modalOpen}>
        <ManageHolidayorEventPopup
        onClose={handleClose}
        />
    </Modal>
    </div>
  )
}

export default ManageHolidays
