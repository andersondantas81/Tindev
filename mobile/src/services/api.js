import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030',
});

export default api;

//yarn add axios
//adb reverse tcp:3030 tcp:3030
//adb -s 1faad8e5 reverse tcp:3030 tcp:3030
