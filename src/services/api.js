import axios from "axios";

// [full]: https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_kMk0MeX9Tc8joZoyJ1ubru0WkICDU3gdg5Rki4za&base_currency=USD&currencies=BRL

const api = axios.create({
  baseURL: "https://api.freecurrencyapi.com/v1",
});

export default api;
