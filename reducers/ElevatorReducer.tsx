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
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
