const initialState = {
  url1Data: [],
  url2Data: [],
  table1Data: [],
  table2Data: [],
};

const cryptoReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "FETCH_DATA": {
      const url1Data = payload.response1;
      const url2Data = payload.response2;
      return {
        url1Data,
        url2Data,
      };
    }

    case "UPDATE_CRYPTO_PRICE": {
      const tableKey = `table${payload.tableNo}Data`;
      return {
        ...state,
        [tableKey]: state[tableKey]
          ? state[tableKey].find((crypto) => {
              return crypto.symbol === payload.data.symbol;
            })
            ? state[tableKey].map((crypto) => {
                if (crypto.symbol === payload.data.symbol) {
                  return payload.data;
                }
                return crypto;
              })
            : [...state[tableKey], payload.data]
          : [].concat(payload.data),
      };
    }

    case "UPDATE_DATA": {
      return {
        ...state,
        table1Data: payload.tab1Response,
        table2Data: payload.tab2Response,
      };
    }

    default:
      return state;
  }
};

export default cryptoReducer;
