import { createSlice } from "@reduxjs/toolkit";

interface ICommentState {
    comments: TComment[];
}

export const commentSlice = createSlice({
    name: "comments",
    initialState: {
        comments:[] as TComment[],
    } as ICommentState,
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload);
        },
        removeComment: (state, action) => {
            state.comments = state.comments.filter((comment) => comment.id !== action.payload);
        },
        updateComment: (state, action) => {
            state.comments = state.comments.map((comment) => {
                if (comment.id === action.payload.id) {
                    return action.payload;
                }
                return comment;
            });
        }        
}});

export const { addComment, removeComment, updateComment } = commentSlice.actions
export default commentSlice.reducer


type TComment = {
    id: string;
    content: string;
    postId: string;
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