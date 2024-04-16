import styles from "../styles/Home.module.css";

const ElevatorDisplay = (props: any) => {
  return (
    <div className={styles.card}>
            <h1>Elevator</h1>
            <div>Floor {props.elevator.currentFloor}</div>
            <div>{props.elevator.isMoving ? "Is moving" : "Is not moving"}</div>
            <div>Doors are {props.elevator.doors}</div>
          </div>
  );
};

export default ElevatorDisplay;
