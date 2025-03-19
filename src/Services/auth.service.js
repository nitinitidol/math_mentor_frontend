import server from "../middleware/interceptor"

const AuthService = {
    loginUser : async(values) => {
        return await server.post("" , values) ; 
    }
}

export default AuthService ; 