
import Menu from './features/menu/menu'
import Blog from './features/blog/components/Blog'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import data from './data'
function App() {

  return (
    <div className="App">
      
      <Menu/>
      <Container alignItems="center" style={{marginTop : "3rem" , marginBottom : "3rem"}} sx='lg'>
          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center" spacing={4}>
            
            {data.map(article => <Grid item >
              <Blog {...article}/>
            </Grid>)}
            
          </Grid>

      </Container>


    </div>
  )
}

export default App
