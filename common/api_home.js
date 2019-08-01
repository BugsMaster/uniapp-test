import http from "./http";
// import { Storage } from "./utils";

export default {
    //登录api
    login(paramas) {
        return http.post("/api/account/login4app", paramas);
    },
	remoteCtrl(paramas) {
	    return http.put("/api/user/remotectrl", paramas);
	},
}