import { Typography , Container , TextField , Box , Button} from "@mui/material"
import { useState } from "react"
import SendIcon from '@mui/icons-material/Send';

export default function Publish(){
        const [form , setForm] = useState({
            title : "" , 
            content : ""
        })

        const handleChange = (e)=>{
            
            setForm(
                prev =>({...prev , [e.target.name] : e.target.value })
            )
        }

    return(
        <>
            <Container maxWidth="sm" style={{marginTop : "3rem"}}>
                <Typography variant="h3"> Add a new blog</Typography>
                <br />
                <Box component='form'  noValidate autoComplete="off" >

                <TextField id="standard-basic" label="Title" variant="standard" name="title" value={form.title} onChange={handleChange}/>
                <br /><br /><br />
                <TextField id="standard-basic" label="Content" placeholder="Write your blog here" name="content" multiline fullWidth variant="standard" value={form.content} onChange={handleChange} />
                </Box>
                <br /><br />
                <Button style={{background : "#000"}} variant="contained" endIcon={<SendIcon/>}>Publish </Button>


            </Container>
        </>
    )
}