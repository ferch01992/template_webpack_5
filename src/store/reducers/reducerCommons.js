export const reducerGeneraFisrtLevel = (state, payload) => ({
  ...state,
  ...payload,
});

export const reducerFirstLevel = (state, payload, rest) => ({
  ...state,
  [rest.propKey]: payload,
});
