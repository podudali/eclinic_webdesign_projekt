// styles
import styles from "./Testimonials.module.css";

// components
import { Testimonial } from "../Testimonial/Testimonial";

export const Testimonials = (): JSX.Element => {
  const users = [
    { id: 1, name: "Sally", 
    image: "https://i.pinimg.com/originals/c3/45/05/c34505eb63edc65300a690f1ad903799.jpg"},
    { id: 2, name: "Ben", 
    image: "https://i.pinimg.com/originals/05/b3/a3/05b3a3bb8fcea8326543888902f9cb01.jpg"},
    { id: 3, name: "Deborah", 
    image: "https://i.ebayimg.com/images/g/8wEAAOSwIIhZgM0j/s-l500.jpg"},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <Testimonial users={users} />
    </div>
  )
}