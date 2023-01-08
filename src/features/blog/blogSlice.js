import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
    name : 'blog' , 
    initialState : {allBlogs : []} , 
    reducers : {
        add : {} , 
        del : {}
    }
})


export const {add , del} = blogSlice.actions ; 
export const selectBlog = state => state.blog.allBlogs;
export default blogSlice.reducer