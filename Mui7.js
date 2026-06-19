import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Mui7() {
    const [opend,setopend]=useState(false)
const handleclick=()=>{
setopend(true)

}

  return (
    <div>Mui7
<Box>
  <IconButton onClick={handleclick}>
    <MailIcon />
    </IconButton>  

<Drawer aria-level='drawer' 
anchor='left'
open={opend}
onClose={()=>setopend(false) }
>


<Stack width={200} spacing={2}sx={{mx:2}}>

<Typography variant='h6'>drawer list</Typography>
<Link herf='/Mui2  '>home1</Link>
<Link herf='#  '>home 2</Link>
<Link herf=' # '>home 3</Link>
<Link herf='# '>home 3</Link>
</Stack>
</Drawer>
</Box>
    </div>
  )
}

export default Mui7