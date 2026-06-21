 import React from 'react'
 import { useState } from 'react'
 import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
 import Box from '@mui/material/Box';
 import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { red } from '@mui/material/colors';
import Portal from '@mui/material/Portal';
 function Mui13() {
const [open,setopen]=useState(false)
const[show,setshow]=useState()

 const handleOpen = () => setopen(true);
  const handleClose = () => setopen(false);

  const handleclick = () => {
    setshow(!show);
  };
   return (
     <div> 
<Fab color='secondary' onClick={handleclick}>


</Fab>
 { show ? <Portal >
  
  
  <Box sx={{width:100,height:100,bgcolor:'red'}}> 
    React Material UI Portal | Dr Vipin Classes </Box>
   </Portal>:null}
   <Fab onClick={handleOpen}color='primary'> <EditIcon /></Fab>
<Modal
open={open}
onClose={handleClose}
>
<Box sx={{width:300,bgcolor:red[100],height:300}}>

<Typography variant='h6'>  Text in a modal</Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

</Box>
 
        

</Modal>

    <Box sx={{'&>:not(style)':{m:2}}} >

   <Fab color='primary'>
     <AddIcon />
    </Fab> 

    <Fab color='secondary'>

   <EditIcon />
    </Fab>
</Box>


     </div>
   )
 }
 
 export default Mui13