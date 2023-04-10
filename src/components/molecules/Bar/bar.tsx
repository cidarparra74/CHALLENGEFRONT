import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Bar(){
  const [auth, setAuth] = React.useState(true);
  const [] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CATEGORIAS
          </Typography>
          {auth && (
            <div>
             
            
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
  }
export default Bar
