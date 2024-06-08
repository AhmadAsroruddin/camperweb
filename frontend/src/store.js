import { configureStore } from "@reduxjs/toolkit";
// import userProfileReducer from '../src/pages/UserProfile/slice/slice';
import loginReducer from '../src/pages/Auth/slice/loginSlice';
import authReducer from "./pages/Auth/slice/authSlice";
// import tripSlice from "./pages/OpenTrips/slice/tripSlice";
import travelsSlice from "./pages/Campervan/slice/slice";
// import orderSlice from "./pages/Order/slice/OrderSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    user: authReducer,
    travel: travelsSlice.reducer,
    
  },
});
