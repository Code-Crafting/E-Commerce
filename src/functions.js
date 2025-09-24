export const convertToINR = (USD) => {
  return `${Math.floor(USD * 85)}`;
};

export const addCommaToINR = (INR) => {
  return Number(INR).toLocaleString("en-IN");
};
