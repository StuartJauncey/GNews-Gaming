const dateModifier = date => {
  const day = date.substring(8, 10);
  const month = date.substring(5, 7);
  const year = date.substring(2, 4);
  const hour = date.substring(11, 13);
  const minute = date.substring(14, 16);
  return `Posted on ${day}-${month}-${year} at ${hour}:${minute}`;
};
export default dateModifier;