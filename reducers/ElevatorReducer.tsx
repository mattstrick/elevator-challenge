export function elevatorReducer(elevator: object, action: any) {
    switch (action.type) {
      case "open doors": {
        return {
          ...elevator,
          doors: "open",
        };
      }
      case "close doors": {
        return {
          ...elevator,
          doors: "closed",
        };
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }