export const countEven = values => {
  if (!values || !values.length) {
    return 0;
  }

  return values.reduce((acc, value) => {
    if (Number.isInteger(value) && value % 2 === 0) {
      return acc + 1;
    }

    return acc;
  }, 0);
};
