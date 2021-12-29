import axios from "axios";
import jwtDecode from "jwt-decode";

export const api = axios.create({
    baseURL: "http://127.0.0.1:5000",
});

export const localToken = localStorage.getItem("statfi:token") || "";

const decodedToken = localToken === "" ? "" : jwtDecode(localToken);

export const userID = Number(decodedToken.sub);

api.defaults.headers.authorization =
    localToken === "" ? "" : `Bearer ${localToken}`;