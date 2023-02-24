const getStructuredZodError = (err) => {
  
  const strtuctedErrorObj = {};
  for (const e of err.errors) {
    
    const field = e.path[0];
    strtuctedErrorObj[field] = e.message;
  }
  return strtuctedErrorObj;
};

export default getStructuredZodError;
