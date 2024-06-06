import axiosInstance from "../../../api/axiosInstance"

const TravelService = () => {
    const createTravel = async (payload) => {
        const response = await axiosInstance.post('/campervan', payload)
        console.log(`data travel: ${JSON.stringify(response.data)}`);
        return response.data
    }

    const getAllData = async () => {
        const response = await axiosInstance.get('/campervan')
        console.log(`data travel: ${JSON.stringify(response.data)}`);
        return response.data
    }

    const getTravelById = async(travelId) =>{
        const response = await axiosInstance.get(`/campervan/${travelId}`);
        console.log("data travel:", response);
        return response.data;
    }

    const getTravelByUserId = async(userId) =>{
        const response = await axiosInstance.get(`/campervan/user/${userId}`);
        console.log(`data travel: ${response}`);
        return response.data.data;
    }

    const getAllParticipantByTripId = async(tripId) => {
        const response = await axiosInstance.get(`order/participant/${tripId}`)

        return response.data.data;
    }

    const updateTravelById = async (travelId, payload) => {
        try {
          const response = await axiosInstance.put(`/campervan/${travelId}`, payload);
          console.log(`Updated travel data (${travelId}):`, response.data);
          return response.data;
        } catch (error) {
          console.error(`Error updating travel data (${travelId}):`, error);
          throw error;
        }
      };    

    return {
        createTravel,
        getAllData,
        getTravelById,
        getTravelByUserId,
        getAllParticipantByTripId,
        updateTravelById
    }
}

export default TravelService;
