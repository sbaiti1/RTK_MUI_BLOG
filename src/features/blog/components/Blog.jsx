import { Card , CardMedia , CardContent , CardActionArea , Typography } from "@mui/material"


export default function Blog(props){

    return(
        <>
            <Card style={{boxShadow : "none"}} sx={{maxWidth : 650}}>
                
                    <Typography   variant="h6" style={{color : "#94a3b8" , margin : "10px 5px" , fontSize : "17px"}} > {props.date} </Typography>
                    <Typography gutterBottom variant="h4" component="div"> {props.title}  </Typography>
                    <CardMedia component='img' style={{borderRadius : "5px"}} height="280" image={props.img} />
            </Card>
        </>
    )
}