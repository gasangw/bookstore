export const statusAction = () => ({
  type: 'STATUS',
});

const checkingStatus = (state = [], action) => {
  if (action.type === 'STATUS') {
    return {
      STATUS: 'Under construction',
    };
  }
  return state;
};

export default checkingStatus;
