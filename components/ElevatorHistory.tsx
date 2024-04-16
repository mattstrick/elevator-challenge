import styles from "../styles/Home.module.css";

const ElevatorHistory = (props: any) => {
  return (
    <div className={styles.card}>
      <h1>Elevator History</h1>
      <div className={styles.overlay}></div>
      <ul>
        {props.history.map((event: string, index: number) => 
          (<li key={index}>{event}</li>)
        )}
      </ul>
    </div>
  );
};

export default ElevatorHistory;
