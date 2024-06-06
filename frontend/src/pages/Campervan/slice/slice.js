import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TravelService from "../service/service";

const { createTravel ,getAllData, getTravelById, getTravelByUserId, getAllParticipantByTripId } = TravelService();

const initialState = {
    travel: null,
    travels: [],
    travelDetail: null,
    isLoading: false,
    error: null,
    travelDetailFromUser: null,
    travelParticipant : []
};

export const createTravelAction = createAsyncThunk(
    "travel/createTravel",
    async (payload, thunkAPI) => {
        try {
            const response = await createTravel(payload);
            console.log("data travel: ", response);
            return response;
        } catch (e) {
            console.log(`Type error ${e}`);
            throw new Error("Failed to fetch travel by id");
        }
    }
)

export const getAllParticipantAction = createAsyncThunk(
    "trip/participant",
    async(tripId) =>{
      try{
        const response = await getAllParticipantByTripId(tripId);
        return response;
      } catch(e){
        throw new Error("Failed to fetch All  Participant");
      }
    } 
  )

export const getAllDataTravels = createAsyncThunk(
    "travels/getAllTravels",
    async () => {
        try {
            const response = await getAllData();
            if (response) {
                console.log(
                    `Show All Data Travels: ${JSON.stringify(response)}`
                );
                return response;
            }
        } catch (error) {
            throw new Error("Invalid repsonse");
        }
    }
);

export const getTravelDetailById = createAsyncThunk(
    "travels/getTravelDetailById",
    async (travelId) => {
        try {
            const response = await getTravelById(travelId);
            console.log("data travel: ", response);
            return response;
        } catch (e) {
            console.log(`Type error ${e}`);
            throw new Error("Failed to fetch travel by id");
        }
    }
);

export const getTravelByUserIdAction = createAsyncThunk(
    "travel/getTravelByUserId",
    async (payload) => {
        try{
            const response = await getTravelByUserId(payload);
            console.log(response);
            return response;
        } catch (e){
            console.log(`Type error ${e}`);
            throw new Error("Failed to fetch travel by user id");
        }
    }
)

const travelsSlice = createSlice({
    name: "travels",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createTravelAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createTravelAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.travel = action.payload;
            })
            .addCase(createTravelAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getAllDataTravels.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllDataTravels.fulfilled, (state, action) => {
                state.isLoading = false;
                state.travels = action.payload;
            })
            .addCase(getAllDataTravels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getTravelDetailById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTravelDetailById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.travelDetail = action.payload;
            })
            .addCase(getTravelDetailById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getTravelByUserIdAction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getTravelByUserIdAction.fulfilled, (state, {payload}) => {
                console.log(payload);
                state.isLoading = false;
                state.travelDetailFromUser = payload;

            })
            .addCase(getTravelByUserIdAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(getAllParticipantAction.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllParticipantAction.fulfilled, (state, {payload}) => {
                console.log(payload);
                state.isLoading = false;
                state.travelParticipant = payload;

            })
            .addCase(getAllParticipantAction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default travelsSlice;
