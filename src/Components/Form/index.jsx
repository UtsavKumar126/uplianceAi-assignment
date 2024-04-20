import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.css"
import { generateUUid } from "../../functions/generateUuid";

function Form() {
    const[formData,setFormData]=useState(null);
    const [isFormDirty, setIsFormDirty] = useState(false);
    
    useEffect(() => {
        const handleBeforeUnload = (e) => {
          if (isFormDirty) {
            // Custom message to inform the user about unsaved changes
            const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave this page?';
    
            // Set the confirmation message in some browsers
            e.returnValue = confirmationMessage;
    
            // Return the confirmation message
            return confirmationMessage;
          }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, [isFormDirty]);


    function handleChange(e){
        setFormData({
            ...formData,
            id:generateUUid(),
            [e.target.name]:e.target.value
        })
        setIsFormDirty(true)
    }

    function submitForm(e){
        e.preventDefault();
        console.log(formData);
        setIsFormDirty(false)
    }
  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.textField}>
        <label htmlFor="">Name</label>
        <TextField required fullWidth id="outlined-basic" name='name' label="Name" variant="outlined" onChange={handleChange}/>
      </div>
      <div className={styles.textField}>
        <label htmlFor="">Address</label>
        <TextField required fullWidth id="outlined-basic" name='address' label="Address" variant="outlined" onChange={handleChange}/>
      </div>
      <div className={styles.textField}>
        <label htmlFor="">Email</label>
        <TextField required fullWidth id="outlined-basic" label="Email" name='email' variant="outlined" onChange={handleChange}/>
      </div>
      <div className={styles.textField}>
        <label htmlFor="">Phone</label>
        <TextField required fullWidth id="outlined-basic" label="Phone" name='phone' variant="outlined" onChange={handleChange}/>
      </div>
      <button className={styles.button}>Submit</button>
    </form>
  );
}

export default Form;
