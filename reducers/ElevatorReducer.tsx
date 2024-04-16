const updateEvents = (events: Array<string>, newEvent: string) => {
    if (events.length < 10) {
        return [...events, newEvent];
    } else {
        const _events = events.slice(1);
        return [..._events, newEvent];
    };
}

export function elevatorReducer(elevator: any, action: any) {
  switch (action.type) {
    case "open doors": {
      return {
        currentFloor: elevator.currentFloor,
        doors: "open",
        isMoving: elevator.isMoving,
        events: updateEvents(elevator.events, "Opened Doors"),
      };
    }
    case "close doors": {
      return {
        currentFloor: elevator.currentFloor,
        doors: "closed",
        isMoving: elevator.isMoving,
        events: updateEvents(elevator.events, "Closed Doors"),
      };
    }
    case "decrease floor": {
        if (elevator.currentFloor === 0) return elevator;
        else return {
            currentFloor: elevator.currentFloor--,
            doors: elevator.doors,
            isMoving: elevator.isMoving,
            events: updateEvents(elevator.events, `Moved to floor ${elevator.currentFloor}`),
        };
    }
    case "increase floor": {
        if (elevator.currentFloor === 20) return elevator;
        else return {
            currentFloor: elevator.currentFloor++,
            doors: elevator.doors,
            isMoving: elevator.isMoving,
            events: updateEvents(elevator.events, `Moved to floor ${elevator.currentFloor}`),
        };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
