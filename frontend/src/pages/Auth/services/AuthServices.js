import axiosInstance from "../../../api/axiosInstance";

const AuthService = () => {

    const login = async (payload) => {
        try {
            console.log(`Payload for login: ${JSON.stringify(payload)}`);
            
            const response = await fetch("http://localhost:8000/auth/login", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            });
        
            const data = await response.json();
            console.log("Response received:", data);
        
            if (response.status === 200) {
              console.log("Login successful", data);
              return data;
            } else {
              console.error("Login failed with status:", response.status);
              throw new Error("Error on login");
            }
          } catch (error) {
            console.error("Error during login:", error);
            throw error;
          }
    }

    const registerUser = async (payload) => {
        const {data} = await axiosInstance.post("/auth/register", payload);
        return data;
    }

    const validateToken = async () => {
        const token = localStorage.getItem("token");

        const {data} = await axiosInstance.get("auth/validate-token",{
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        });
        return data.statusCode === 200;
    }

    const getUserData = async(userId)=>{
        try {
            const response = await fetch(`http://localhost:8000/auth/${userId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                // Jangan lupa untuk mengirim token jika diperlukan
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error while fetching user data:", error);
            throw error;
          }
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
        logout,
        getUserData
    }
}

export default AuthService;