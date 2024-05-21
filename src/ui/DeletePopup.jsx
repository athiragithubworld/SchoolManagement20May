import  { useState } from 'react';
import styles from "../styles/DeletePopup.module.css";

const DeletePopup = ({ handleConfirmDelete, handleCancelDelete }) => 
{
    const handleConfirm = () => {
        handleConfirmDelete();
      };
    
      const handleCancel = () => {
        handleCancelDelete();
      };
    return (
        <div className={styles.confirmationpopup}>
            <form>
            <h4>Delete Details</h4>
            <div className={styles.confirmationmessage}>
            <div>Are you sure you want to delete?</div>
          <span className={styles.confirmationbuttons}>
            <button onClick={handleConfirm} className={styles.save}>Yes</button>
            <button onClick={handleCancel} className={styles.save}>No</button>
          </span></div>
          </form>
        </div>
      );
    };
export default DeletePopup