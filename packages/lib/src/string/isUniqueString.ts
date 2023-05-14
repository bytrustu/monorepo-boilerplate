const isUniqueString = (str: string): boolean => {
  const strSet = new Set(str);
  return str.length === strSet.size;
};

export default isUniqueString;
