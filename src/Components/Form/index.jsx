import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.css";
import { generateUUid } from "../../functions/generateUuid";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../../Firebase";

function Form() {
  const [formData, setFormData] = useState({
    id: generateUUid(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isFormDirty) {
        // Custom message to inform the user about unsaved changes
        const confirmationMessage =
          "You have unsaved changes. Are you sure you want to leave this page?";

        // Set the confirmation message in some browsers
        e.returnValue = confirmationMessage;

        // Return the confirmation message
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

  function handleChange(e) {
    setFormData({
      ...formData,
      id: generateUUid(),
      [e.target.name]: e.target.value,
    });
    setIsFormDirty(true);
  }

  async function submitForm(e) {
    e.preventDefault();
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "User"), {
      id: formData.id,
      name: formData.name,
      address: formData.address,
      email: formData.email,
      phone: formData.phone,
      time: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    });
    console.log(docRef);
    setIsFormDirty(false);
    alert('Subscribed successfully')
    setFormData({
      id: generateUUid(),
      name: "",
      address: "",
      email: "",
      phone: "",
    });
  }
  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.textField}>
        <label htmlFor="">Name</label>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          name="name"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className={styles.textField}>
        <label htmlFor="">Address</label>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          name="address"
          label="Address"
          variant="outlined"
          onChange={handleChange}
          value={formData.address}
        />
      </div>
      <div className={styles.textField}>
        <label htmlFor="">Email</label>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className={styles.textField}>
        <label htmlFor="">Phone</label>
        <TextField
          required
          fullWidth
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>
      <button className={styles.button}>Submit</button>
    </form>
  );
}

export default Form;
