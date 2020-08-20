import axios from "axios";

export const fetchData = (url1, url2) => {
  return async (dispatch) => {
    try {
      const response1 = await axios.get(`${url1}`);
      const response2 = await axios.get(url2);
      dispatch({
        type: "FETCH_DATA",
        payload: {
          response1: response1.data,
          response2: response2.data,
        },
      });
    } catch (err) {
      console.log("Error message : ", err.message);
    }
  };
};

export const fillCryptoTable = (url, cryptoSymbol, tableNumber) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}?symbol=${cryptoSymbol}`);
      dispatch({
        type: "UPDATE_CRYPTO_PRICE",
        payload: {
          data: response.data,
          tableNo: tableNumber,
        },
      });
    } catch (err) {
      console.log("Error message", err.message);
    }
  };
};

export const updateAllData = (url1, url2, cryptoList) => {
  return async (dispatch) => {
    try {
      let tab1Response = [];

      for (let i = 0; i < cryptoList.table1Data.length; i++) {
        let res = await axios.get(
          `${url1}?symbol=${cryptoList.table1Data[i].symbol}`
        );
        tab1Response.push(res.data);
      }

      let tab2Response = [];
      for (let i = 0; i < cryptoList.table2Data.length; i++) {
        let res = await axios.get(
          `${url2}?symbol=${cryptoList.table2Data[i].symbol}`
        );
        tab2Response.push(res.data);
      }

      dispatch({
        type: "UPDATE_DATA",
        payload: {
          tab1Response,
          tab2Response,
        },
      });
    } catch (err) {
      console.log("Error message", err.message);
    }
  };
};
