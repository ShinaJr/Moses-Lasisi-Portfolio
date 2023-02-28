import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data
import {
  githubUsername,
  projectCardImages,
  projectFeaturesImages,
} from "../data";

const initialState = {
  error: "",
  isLoading: true,
  data: [],
};

export const url = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;

export const fetchGitHubReops = createAsyncThunk(
  "allProjects/fetchGitHubReops",
  async (thunkApi, { rejectWithValue }) => {
    try {
      const response = await fetch(url).then(function (res) {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res;
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(
        `Error: ${err.message}, check username in data.js (currently ${githubUsername})`
      );
    }
  }
);

export const allProjectsSlice = createSlice({
  name: "allProjects",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubReops.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchGitHubReops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        projectCardImages.forEach(function (element) {
          state.data.forEach((el, i) => {
            if (element.name.toLowerCase() === el.name.toLowerCase()) {
              el.image = element.image;
              el.image1 = element.image1;
              el.image2 = element.image2;
              el.image3 = element.image3;
              el.image4 = element.image4;
              el.image5 = element.image5;
              el.image6 = element.image6;
              el.image7 = element.image7;
              el.video = element.video;

            }
          });
        });
      })
      // .addCase(fetchGitHubReops.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.data = action.payload;
      //   projectFeaturesImages.forEach(function (element) {
      //     state.data.forEach((el, i) => {
      //       if (element.name.toLowerCase() === el.name.toLowerCase()) {
      //         el.image1 = element.image1;
      //         el.image2 = element.image2;
      //         el.image3 = element.image3;
      //         el.image4 = element.image4;
      //         el.image5 = element.image5;
      //         el.image6 = element.image6;
      //         el.image7 = element.image7;
      //         el.video = element.video;
      //       }
      //     });
      //   });
      // })
      .addCase(fetchGitHubReops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error);
      });
  },
});

export const selectIsLoading = (state) => state.allProjects.isLoading;
export const selectError = (state) => state.allProjects.error;
export const selectData = (state) => state.allProjects.data;

export default allProjectsSlice.reducer;
