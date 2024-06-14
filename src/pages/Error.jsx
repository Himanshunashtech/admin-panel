import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import image from "../public/illustration_404.svg"


function Error() {

     
  
    return (
      <>
      
  
        <Container className=" h-screen">
          <Box
            sx={{
              py: 12,
              maxWidth: 480,
              mx: 'auto',
              display: 'flex',
              minHeight: '100vh',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h3" sx={{ mb: 3 }}>
              Sorry, page not found!
            </Typography>
  
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
              sure to check your spelling.
            </Typography>
  
            <Box
              component="img"
              src=''
              sx={{
                mx: 'auto',
                height: 200,
                my: { xs: 5, sm: 10 },
              }}
            />
  
            <Button  size="large" variant="contained" >
              <Link to="/admin">
              Go to ADMIN
              </Link>
            </Button>
          </Box>
        </Container>
      </>
    );
}

export default Error;
