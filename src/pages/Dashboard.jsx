import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MiniDrawer from '../components/MiniDrawer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AnalyticsReporting from './AnalyticsReporting';



function Dashboard() {


  return (
    <div className=" flex  overflow-hidden mr-20">
     <MiniDrawer />
     <Container  className=' bg-fuchsia-300 h-screen w-full  mt-20 '>
    
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className=" p-10  " >
        <Grid xs={6} >
          <div className=' h-60 bg-white'>1</div>
        </Grid>
        <Grid xs={6}>
          <div className='h-60 bg-white'>2</div>
        </Grid>
        <Grid xs={6}>
          <div className='h-60 bg-white'>3</div>
        </Grid>
        <Grid xs={6}>
          <div className='h-60 bg-white'>4</div>
        </Grid>
      </Grid>
          
        



  



    </Container>

      
</div>)
}


export default Dashboard;


