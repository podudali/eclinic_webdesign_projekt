// react and hooks
import React, { useState } from "react";

// styles
import styles from "./Search.module.css";

interface Doctor {
  id: number;
  name: string;
  field: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Wanl Alfati",
    field: "Gynecology",
  },
  {
    id: 2,
    name: "Amin Akwaa",
    field: "Dentistry",
  },
  {
    id: 3,
    name: "Ivan Konnikov",
    field: "GP",
  },
  {
    id: 4,
    name: "Anastasia Seliverstova",
    field: "Paedeatrics",
  },
];

export const Search = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form id="form">
          <h2>Search doctors</h2>
          <input
            onChange={handleChange}
            className={styles.search}
            type="text"
            placeholder="e.g. Malek Havranek"
          />
        </form>
        {userInput.length > 0 && (
          <ul className={styles.results}>
            {doctors
              .filter((doctor) => doctor.name.toLowerCase().includes(userInput))
              .map((doctor) => (
                <li key={doctor.id}>
                  {doctor.name} | {doctor.field}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};
