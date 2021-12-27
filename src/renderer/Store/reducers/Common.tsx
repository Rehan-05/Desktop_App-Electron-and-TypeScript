export const createErrorReducer = (actionType: string) => {
  return (state = null, action: any) => {
    switch (action.type) {
      case `${actionType}_INIT`:
        return null;
      case `${actionType}_ERROR`:
        return action.error;
      default:
        return state;
    }
  };
};

export const createIsFetchingReducer = (actionType: string) => {
  return (state = false, action: any) => {
    switch (action.type) {
      case `${actionType}_INIT`:
        return true;
      case `${actionType}_SUCCESS`:
      case `${actionType}_ERROR`:
        return false;
      default:
        return state;
    }
  };
};
