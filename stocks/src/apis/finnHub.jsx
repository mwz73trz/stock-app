import axios from "axios";

const TOKEN = "c4kea5qad3ib58s068p0";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
