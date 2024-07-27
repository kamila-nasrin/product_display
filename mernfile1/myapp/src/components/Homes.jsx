import { Box , Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const Homes = () => {
    var [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response)
                setProduct(response.data)
            })
        },[])
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {product.map((val)=>{
                return(
                
                    // eslint-disable-next-line react/jsx-key
                    <Grid item xs={9} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345, maxHeight:345 }}>
                 <CardMedia
                   sx={{ height: 140 }}
                   image={val.image}
                   title="product"
                 />
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {val.title}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                    {val.price}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                    {val.category}
                   </Typography>
                 </CardContent>
                 {/* <CardActions>
                   <Button size="small">Share</Button>
                   <Button size="small">Learn More</Button>
                 </CardActions> */}
               </Card>
               </Grid>
               

                )
            })}
       
    </Grid>
    </Box>

        
    </div>
  )
}

export default Homes
