export const returnData = (payload, type, rest) =>
  rest !== undefined && typeof rest === 'object'
    ? { payload, type, ...rest }
    : { payload, type };
