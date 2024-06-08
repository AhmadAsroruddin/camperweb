import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TravelService from "../service/service";

const { createTravel, getAllData, getTravelById, getTravelByUserId, getAllParticipantByTripId, updateTravelById, deleteTravel } = TravelService();

const initialState = {
  travel: null,
  travels: [],
  travelDetail: null,
  isLoading: false,
  error: null,
  travelDetailFromUser: null,
  travelParticipant: []
};

export const createTravelAction = createAsyncThunk(
  "travel/createTravel",
  async (payload, thunkAPI) => {
    try {
      const response = await createTravel(payload);
      console.log("Created travel data: ", response);
      return response;
    } catch (e) {
      console.log(`Type error ${e}`);
      throw new Error("Failed to create travel");
    }
  }
);

export const getAllParticipantAction = createAsyncThunk(
  "trip/participant",
  async (tripId) => {
    try {
      const response = await getAllParticipantByTripId(tripId);
      return response;
    } catch (e) {
      throw new Error("Failed to fetch all participants");
    }
  }
);

export const getAllDataTravels = createAsyncThunk(
  "travels/getAllTravels",
  async () => {
    try {
      const response = await getAllData();
      if (response) {
        console.log(`Show All Data Travels: ${JSON.stringify(response)}`);
        return response;
      }
    } catch (error) {
      throw new Error("Failed to fetch all travels");
    }
  }
);

export const getTravelDetailById = createAsyncThunk(
  "travels/getTravelDetailById",
  async (travelId) => {
    try {
      const response = await getTravelById(travelId);
      console.log("Travel data by ID: ", response);
      return response;
    } catch (e) {
      console.log(`Type error ${e}`);
      throw new Error("Failed to fetch travel detail by id");
    }
  }
);

export const getTravelByUserIdAction = createAsyncThunk(
  "travel/getTravelByUserId",
  async (payload) => {
    try {
      const response = await getTravelByUserId(payload);
      console.log(response);
      return response;
    } catch (e) {
      console.log(`Type error ${e}`);
      throw new Error("Failed to fetch travel by user id");
    }
  }
);

export const updateTravelByIdAction = createAsyncThunk(
  "travel/updateTravelById",
  async ({ travelId, payload }, {rejectWithValue}) => {
    try {
      const response = await updateTravelById(travelId, payload);
      console.log(`Updated travel data (${travelId}):`, response);
      return response;
    } catch (e) {
      console.log(`Type error ${e}`);
      throw new Error(`Failed to update travel data (${travelId})`);
    }
  }
);

export const deleteTravelAction = createAsyncThunk(
  "travel/deleteTravel",
  async({travelId}) =>{
    try{
      console.log(`this is in service ${travelId}`)
      const response = await deleteTravel(travelId);

      return response;
    }catch(e){
      console.log(e)
      throw new Error(`Failde to delete travel id ${travelId}`);
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
      .addCase(getTravelByUserIdAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.travelDetailFromUser = action.payload;
      })
      .addCase(getTravelByUserIdAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getAllParticipantAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllParticipantAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.travelParticipant = action.payload;
      })
      .addCase(getAllParticipantAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateTravelByIdAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTravelByIdAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.travel = action.payload;
      })
      .addCase(updateTravelByIdAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTravelAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTravelAction.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteTravelAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default travelsSlice;
