import axios from "axios";

export default {
  data() {
    return {
      Axios: axios.create({
        baseURL: "http://localhost:1337",
      }),
    };
  },
  methods: {
    async request(config) {
      try {
        return await this.Axios(config);
      } catch (err) {
        return err.response.data;
      }
    },
  },
};
