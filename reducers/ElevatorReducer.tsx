export function elevatorReducer(elevator: any, action: any) {
  switch (action.type) {
    case "open doors": {
      return {
        currentFloor: elevator.currentFloor,
        doors: "open",
        isMoving: elevator.isMoving,
        events: [...elevator.events, 'Opened Doors'],
      };
    }
    case "close doors": {
      return {
        currentFloor: elevator.currentFloor,
        doors: "closed",
        isMoving: elevator.isMoving,
        events: [...elevator.events, 'Closed Doors'],
      };
    }
    case "decrease floor": {
        return {
            currentFloor: elevator.currentFloor--,
            doors: elevator.doors,
            isMoving: elevator.isMoving,
            events: [...elevator.events, `Moved to floor ${elevator.currentFloor}`],
        };
    }
    case "increase floor": {
        return {
            currentFloor: elevator.currentFloor++,
            doors: elevator.doors,
            isMoving: elevator.isMoving,
            events: [...elevator.events, `Moved to floor ${elevator.currentFloor}`],
        };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
