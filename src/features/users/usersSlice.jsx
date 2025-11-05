import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    cities: ["all"],    
    loading: false,
    error: null,
    query: "",
    city: "all",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;

        const cityList = ["all"];
        action.payload.forEach((user) => {
          const cityName = user?.address?.city ? user.address.city : "";
          if (cityName && !cityList.includes(cityName)) {
            cityList.push(cityName);
          }
        });
        state.cities = cityList;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Error during loading";
      });
  },
});

export const { setQuery, setCity } = usersSlice.actions;
export default usersSlice.reducer;
