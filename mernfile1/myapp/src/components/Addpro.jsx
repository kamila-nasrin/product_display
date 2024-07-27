import { Button, TextField, Typography } from "@mui/material"

const Addpro = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h3">Add Product</Typography>
      <br />
      <br />
      <br />
      <TextField id="outlined-basic" label="Product Name" variant="outlined" style={{width:350}} /><br /><br />
      <TextField id="outlined-basic" variant="outlined" type="file" style={{width:350}}/><br /><br />
      <TextField id="outlined-basic" label="Price" variant="outlined" type='text' style={{width:350}}/><br /><br />
      <TextField id="outlined-basic" label="Category" variant="outlined" style={{width:350}} /><br /><br /><br />
          <Button variant="contained" type="submit" style={{width:200}}>Submit</Button>
    </div>
  )
}

export default Addpro
