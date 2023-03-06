import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  records: [],
  isLoading: false,
  error: null,
  record: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/posts/${id}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: 'DELETE',
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const insertPost = createAsyncThunk(
  'posts/insertPost',
  async (item, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    item.userId = auth.id;
    try {
      const res = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const editPost = createAsyncThunk(
  'posts/editPost',
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/posts/${item.id}`, {
        method: 'PATCH',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    cleanRecord: (state) => {
      state.record = null;
    },
  },
  extraReducers: (builder) => {
    // fetch posts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.records = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // create posts
    builder
      .addCase(insertPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(insertPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.records.push(action.payload);
      })
      .addCase(insertPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    //  delete posts
    builder
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.records = state.records.filter(
          (record) => record.id !== action.payload
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // fetch post
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.record = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // Edit post
    builder
      .addCase(editPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.record = action.payload;
      })
      .addCase(editPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { cleanRecord } = postsSlice.actions;

export default postsSlice.reducer;
