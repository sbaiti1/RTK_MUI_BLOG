import Blog from './Blog'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectBlog } from '../blogSlice'

export default function BlogContainer(){

    const blogList = useSelector(selectBlog)
    return (
      <div className="App">
        
        <Container alignItems="center" style={{marginTop : "3rem" , marginBottom : "3rem"}} sx='lg'>
            <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center" spacing={4}>
              
              {blogList.map(article => <Grid item >
                <Blog {...article}/>
              </Grid>)}
              
            </Grid>
  
        </Container>
  
        
      </div>
    )
}