import axios from "axios";

export const getCurrenciesData = async () => {
  try {
    const apiData = await axios.get("http://localhost:3001/currencies");
    return apiData.data;
  } catch (error) {
    return { error: true };
  }
};

export const getCurrencyInfo = async (currSymbol) => {
  try {
    const apiData = await axios.get(`http://localhost:3001/currency-info/${currSymbol}`);
    return apiData.data[currSymbol][0];
  } catch (error) {
    return { error: true };
  }
};

export const dummyData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 17149.183045903814,
    change_24h: -0.54572867,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
  {
    id: 1027,
    name: "Ethereum",
    symbol: "ETH",
    price: 1269.2588433750027,
    change_24h: -1.11267256,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  },
  {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    price: 287.76202433545524,
    change_24h: 24.84475921,
    logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  },
];
