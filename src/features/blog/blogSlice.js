import { createSlice } from "@reduxjs/toolkit";
import data from '../../data'

export const blogSlice = createSlice({
    name : 'blog' , 
    initialState : {allBlogs : data} , 
    reducers : {
        add : (state , action)=>{state.allBlogs.push(action.payload)} , 
        del : {}
    }
})


export const {add , del} = blogSlice.actions ; 
export const selectBlog = state => state.blog.allBlogs;
export default blogSlice.reducer