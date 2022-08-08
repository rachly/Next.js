import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';
import { it } from 'node:test';

export interface IsimpleAccordionItem{
   summery:string;
  details:string;
}
interface IProps{
    items:IsimpleAccordionItem[];
}

const  SimpleAccordion:FC<IProps> = ({items})=> {
    const elems=items.map((it,i)=><Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{it.summery}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
       {it.details}
      </Typography>
    </AccordionDetails>
  </Accordion>)
  return (
    <div>
     {elems}    
    </div>
  );
}
export default SimpleAccordion;
