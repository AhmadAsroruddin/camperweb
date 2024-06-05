import axiosInstance from "../../../api/axiosInstance";

const AuthService = () => {

    const login = async (payload) => {
        const res = await axiosInstance.post("/auth/login", payload);
        if(res.status == 200){
            console.log(res.data)
            return res;
        }else{
            throw new Error("Error on login error")
        }
    }

    const registerUser = async (payload) => {
        const {data} = await axiosInstance.post("/auth/register", payload);
        return data;
    }

    const validateToken = async () => {
        const token = sessionStorage.getItem("token");

        const {data} = await axiosInstance.get("auth/validate-token",{
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        });
        return data.statusCode === 200;
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
        localStorage.removeItem('userId');
        localStorage.removeItem('USERID');
    }

    return{
        login,
        registerUser,
        validateToken,
        logout
    }
}

export default AuthService;