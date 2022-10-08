import Axios from "axios";
import QS from "qs";
import Config from "@/Config";
const requestInstance = Axios.create({
  baseURL: Config.request.domain,
  timeout: Config.request.timeout,
  headers: Config.request.headers
});
export default {
  sendPost(path: string, data: Object, params: Object) {
    return requestInstance.post(path, data, params);
  },
  sendGet(path: string, params: Object) {
    return requestInstance.get(path, {params});
  }
}