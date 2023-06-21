import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || `http://localhost:3001`;

class YodlrApi {
    static async request(endpoint, data = {}, method = "get") {
        
        const url = `${BASE_URL}/${endpoint}`;
        const params = method === "get" ? data : {};

        try {    
            let res = await axios({url, method, data, params});
            return res.data;
            }
        catch(err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Get list of all users
    static async getAllUsers() {
        let res = await this.request(`users`);
        return res;
    }

    // Get individual user

    static async getUser(id) {
        let res = await axios.get(`users/${id}`);
        return res;
    }

    // Registers a new user
    static async registerUser(data) {
        let res = await this.request(`users`, data, "post");
        return res;
    }

    static async updataUser(id, data) {
        let res = await this.request(`users/${id}`, data, "put");
        return res;
    }

    // Deletes a user
    static async deleteUser(id) {
        let res = await this.request(`/users/${id}`, "delete");
        return res;
    }
}

export default YodlrApi;

