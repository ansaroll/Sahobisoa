import { createSlice } from "@reduxjs/toolkit";

interface IPostState {
    posts: TPost[];
}

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts:[] as TPost[],
    } as IPostState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
        updatePost: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.posts.find((post) => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { addPost, removePost, updatePost } = postSlice.actions
export default postSlice.reducer


type TPost = {
    id: string;
    title: string;
    content: string;
    user: string;
    date: string;
    reactions: {
        thumbsUp: number;
        hooray: number;
        heart: number;
        rocket: number;
        eyes: number;
    }
}