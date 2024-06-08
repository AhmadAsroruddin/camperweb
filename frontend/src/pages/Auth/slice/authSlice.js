import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthServices'; // Pastikan Anda mengimpor AuthService yang benar

// Membuat instance AuthService
const authService = AuthService();

// Membuat async thunk untuk login
export const loginAction = createAsyncThunk(
  'auth/login',
  async (payload) => {
    
    const response = await authService.login(payload);
    console.log(`data login : ${JSON.stringify(response)}`)
    return response; // Mengembalikan data dari response
  }
);

// Membuat async thunk untuk register
export const registerAction = createAsyncThunk(
  'auth/register',
  async (payload) => {
    const response = await authService.registerUser(payload);
    return response; // Mengembalikan response langsung karena sudah di-handle oleh AuthService
  }
);

// Membuat async thunk untuk validasi token
export const validateTokenAction = createAsyncThunk(
  'auth/validateToken',
  async () => {
    const isValid = await authService.validateToken();
    return isValid; // Mengembalikan hasil validasi token
  }
);

export const getUserDataAction = createAsyncThunk(
  'auth/getUserData',
  async (userId) =>{
    const response = await authService.getUserData(userId);
    console.log(`sdfsdf32 : ${JSON.stringify(response)}`)
    return response;
  }
)

// Membuat slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
    userProfile : null
  },
  reducers: {
    // Tambahkan reducer untuk logout jika diperlukan
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.user = payload.user;
        // state.token = payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(registerAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(validateTokenAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(validateTokenAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = payload;
      })
      .addCase(validateTokenAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(getUserDataAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserDataAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userProfile = payload;
      })
      .addCase(getUserDataAction.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

// Ekspor actions dan reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
