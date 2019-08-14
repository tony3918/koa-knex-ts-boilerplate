import axios from "axios";

const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(
//   AxiosLogger.requestLogger,
//   AxiosLogger.errorLogger
// );
// axiosInstance.interceptors.response.use(
//   AxiosLogger.responseLogger,
//   AxiosLogger.errorLogger
// );

export default axiosInstance;
