import React, { useEffect, useState, Fragment, useCallback } from "react";
import "./App.css";
import { Container, Form, Button, Table } from "semantic-ui-react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchData, fillCryptoTable, updateAllData } from "./actions";

function App() {
  const dispatch = useDispatch();

  const cryptoList = useSelector((state) => state.crypto);
  const cryptoList1 =
    cryptoList && cryptoList.url1Data
      ? cryptoList.url1Data.map((crypto) => ({
          key: crypto.symbol,
          text: crypto.symbol,
          value: crypto.symbol,
        }))
      : [];

  const cryptoList2 =
    cryptoList && cryptoList.url2Data
      ? cryptoList.url2Data.map((crypto) => ({
          key: crypto.symbol,
          text: crypto.symbol,
          value: crypto.symbol,
        }))
      : [];

  const [monitor, setMonitor] = useState(false);

  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const getData = useCallback(
    (url1, url2) => {
      if (url1 && url2) {
        dispatch(fetchData(url1, url2));
      }
    },
    [dispatch]
  );
  const displayData1 = useCallback(() => {
    if (cryptoList.table1Data) {
      return cryptoList.table1Data.map((crypto1) => {
        return (
          <Table.Row key={crypto1.symbol}>
            <Table.Cell>{crypto1.symbol}</Table.Cell>
            <Table.Cell>{crypto1.bidPrice}</Table.Cell>
            <Table.Cell>{crypto1.askPrice}</Table.Cell>
          </Table.Row>
        );
      });
    }
  }, [cryptoList]);

  const displayData2 = useCallback(() => {
    if (cryptoList.table2Data) {
      return cryptoList.table2Data.map((crypto2) => {
        return (
          <Table.Row key={crypto2.symbol}>
            <Table.Cell>{crypto2.symbol}</Table.Cell>
            <Table.Cell>{crypto2.bidPrice}</Table.Cell>
            <Table.Cell>{crypto2.askPrice}</Table.Cell>
          </Table.Row>
        );
      });
    }
  }, [cryptoList]);

  const displayData3 = () => {
    let minKey = null;
    if (cryptoList.table1Data && cryptoList.table2Data) {
      if (cryptoList.table1Data.length >= cryptoList.table2Data.length) {
        minKey = cryptoList.table2Data;
      } else {
        minKey = cryptoList.table1Data;
      }
      return minKey.map((crypto, i) => {
        return (
          <Table.Row key={crypto.symbol}>
            <Table.Cell>
              {crypto.bidPrice - cryptoList.table2Data[i].askPrice}
            </Table.Cell>
            <Table.Cell>
              {crypto.askPrice - cryptoList.table2Data[i].bidPrice}
            </Table.Cell>
          </Table.Row>
        );
      });
    }
  };

  useEffect(() => {
    let updateInterval = null;
    if (monitor) {
      updateInterval = setInterval(() => {
        dispatch(updateAllData(url1, url2, cryptoList));
      }, 500);
    }
    return () => clearInterval(updateInterval);
  }, [cryptoList, dispatch, monitor, url1, url2]);

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>Link 1</label>
          <input
            placeholder="Link 1"
            value={url1}
            onChange={(e) => setUrl1(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Link 2</label>
          <input
            placeholder="Link 2"
            value={url2}
            onChange={(e) => setUrl2(e.target.value)}
          />
        </Form.Field>
        <Button onClick={() => getData(url1, url2)}>Fetch data</Button>

        <Button
          inverted
          color={monitor ? "green" : "red"}
          onClick={() => setMonitor(!monitor)}
        >{`Monitor :${monitor ? "ON" : "OFF"}`}</Button>

        {url1 && url2 && (
          <Fragment>
            <Form.Group widths="equal">
              <Form.Select
                fluid
                search
                label="crypto 1"
                options={cryptoList1}
                onChange={(e, data) => {
                  dispatch(fillCryptoTable(url1, data.value, 1));
                }}
                placeholder="crypto 1"
              />
              <Form.Select
                fluid
                search
                label="crypto 2"
                options={cryptoList2}
                placeholder="crypto 2"
                onChange={(e, data) => {
                  dispatch(fillCryptoTable(url2, data.value, 2));
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Symbol</Table.HeaderCell>
                    <Table.HeaderCell>Bid Price</Table.HeaderCell>
                    <Table.HeaderCell>Ask Price</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>{displayData1()}</Table.Body>
              </Table>
              <Table celled style={{ margin: 0 }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Symbol</Table.HeaderCell>
                    <Table.HeaderCell>Bid Price</Table.HeaderCell>
                    <Table.HeaderCell>Ask Price</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>{displayData2()}</Table.Body>
              </Table>
              <Table celled style={{ margin: 0 }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>B-A Difference</Table.HeaderCell>
                    <Table.HeaderCell>A-B difference</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                {displayData3()}
              </Table>
            </Form.Group>
          </Fragment>
        )}
      </Form>
    </Container>
  );
}

export default connect()(App);
