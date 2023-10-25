// hooks
import { useState } from "react";

//styles
import styles from "./Complaint.module.css";

const Complain = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [showMsg, setShowMsg] = useState<boolean>(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (title.length! > 0 || date.length! > 1 || description.length! > 1) {
      setTitle("");
      setDate("");
      setDescription("");
      setShowMsg(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <h2>File a Complaint</h2>
          {showMsg && (
            <p className={styles.message}>Thank you for your feedback.</p>
          )}
          <label>
            <span>Title</span>
            <input
              className={styles.field}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
          </label>
          <label>
            <span>Date of Occurance</span>
            <input
              className={styles.field}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="date"
            />
          </label>
          <label>
            <span>Description</span>
            <textarea
              className={styles.field}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description"
            />
          </label>
          <input className={styles.submit} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Complain;
