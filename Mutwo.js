import React from 'react'
 import { useState } from 'react';
 import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

 const columns = [
  {
    width: 100,
    label: 'rahim',
    dataKey: 'firstName',
  },
  {
    width: 100,
    label: 'karim',
    dataKey: 'lastName',
  },
  {
    width: 50,
    label: '29',
    dataKey: 'age',
    numeric: true,
  },
  {
    width: 110,
    label: 'bangladesh',
    dataKey: 'state',
  },
  {
    width: 130,
    label: '12345678',
    dataKey: 'phone',
  },
];


function Mutwo() {

  const[expand,setexpand]=useState()
  const handlexpand=(Isexpand,value)=>{
setexpand(Isexpand?value:false)

  }
  return (
    <div>
  
 
  <TableContainer component={Paper}>

<Table>

<TableHead>
<TableRow>
<TableCell>name fist</TableCell>
<TableCell>lenth</TableCell>
<TableCell>last name</TableCell>


</TableRow>

</TableHead>
<TableBody>
{columns.map((row)=>(




<TableRow
 key={row.dataKey}
row={row.row}
>
<TableCell > {row.dataKey}</TableCell>
<TableCell> {row.width}</TableCell>
<TableCell> {row.label}</TableCell>
<TableCell> {}</TableCell>


</TableRow>
)

)}
</TableBody>


</Table>

  </TableContainer>


<Box>
 <Accordion expanded={expand==='one'}
  onChange={(event,Isexpand)=>handlexpand(Isexpand,'one')}>

<AccordionSummary expandIcon={<ExpandMoreIcon />} >
  <Typography variant="h5" color="initial">Accordion one </Typography> 
</AccordionSummary>

<AccordionDetails>

  
  lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget
</AccordionDetails>
 </Accordion>
 <Accordion expanded={expand==='two'}
  onChange={(event,Isexpand)=>handlexpand(Isexpand,'two')}>

<AccordionSummary expandIcon={<ExpandMoreIcon />} >
  <Typography variant="h5" color="initial">Accordion Tow </Typography> 
</AccordionSummary>

<AccordionDetails>

  
  lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget
</AccordionDetails>
 </Accordion>
 <Accordion expanded={expand==='three'}
  onChange={(event,Isexpand)=>handlexpand(Isexpand,'three')}>

<AccordionSummary expandIcon={<ExpandMoreIcon />} >
  <Typography variant="h5" color="initial">Accordion Three </Typography> 
</AccordionSummary>

<AccordionDetails>

  
  lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget
</AccordionDetails>
 </Accordion>

</Box>
<Box>
  <Accordion expanded={expand==='four'}
  onChange={(event,Isexpand)=>handlexpand(Isexpand,'four')}>
<AccordionSummary expandIcon={<ExpandMoreIcon />} >

 <Typography variant="h5" color="initial">Accordion four</Typography>

</AccordionSummary>
   <AccordionDetails>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit cum laborum natus quibusdam repellendus similique doloribus! Praesentium, distinctio eveniet, autem ad
     repellendus ullam amet porro asperiores modi labore fuga totam.
  lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget
    </AccordionDetails>   
  </Accordion>
  
</Box>

  

    </div>
  )
}

export default Mutwo