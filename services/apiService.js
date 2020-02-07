import axios from "axios";

const apiBaseUrl = "https://beta.stockzoom.com/api/v1/";

export const apiService = {
  fetchPortfolios,
  getPortfolio,
  getInstrument
};

async function fetchPortfolios() {
  const jwt = localStorage.getItem("token");
  const { data } = await axios.get(`${apiBaseUrl}/me/portfolios/`, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return data;
}

async function getPortfolio(alias) {
  const jwt = localStorage.getItem("token");
  const { data } = await axios.get(`${apiBaseUrl}/me/portfolios/${alias}/`, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return data;
}

async function getInstrument(id) {
  const jwt = localStorage.getItem("token");
  const { data } = await axios.get(`${apiBaseUrl}/instruments/${id}/`, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return data;
}
