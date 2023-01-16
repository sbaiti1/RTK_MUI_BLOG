import { Typography , Container , TextField , Box , Button} from "@mui/material"
import { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import { useSelector , useDispatch } from "react-redux";
import { add, selectBlog } from "../blogSlice";
export default function Publish(){
    const [file, setFile] = useState();
        function handleFile(e) {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
        }

        const blogList = useSelector(selectBlog)
        const dispatch = useDispatch()
        const [form , setForm] = useState({
            title : "" , 
            content : "" , 
            //img : 'src/assets/minimalist-empty-room-in-business-building.jpg' ,
            img : file
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

                <Button
                    variant="contained"
                    component="label"
                    >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                    </Button>
                <br />
                <Button onClick={()=>dispatch(add(form))} style={{background : "#000"}} variant="contained" endIcon={<SendIcon/>}>Publish </Button>

                 <h2>Add Image:</h2>
            <input type="file" onChange={handleFile} />
            <img src={file} />
            </Container>
        </>
    )
}