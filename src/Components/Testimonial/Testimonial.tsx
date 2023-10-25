// styles
import styles from "./Testimonial.module.css";

interface User {
  id: number,
  name: string,
  image: string
};

interface TestimonialProps {
  users: User[]
};

export const Testimonial = ({users}: TestimonialProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {users.map(user => {
        return (
          <div key={user.id} className={styles.card}>
            <img src={user.image} />
            <h2>{user.name}</h2>
            <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia, ipsum temporibus fuga perspiciatis illo animi tempora odio maiores itaque."</i>
          </div>
        )
      })}
    </div>
  )
};