import { Grid, Typography } from '@mui/material';


export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '110vh', padding: 4 }}
    >

      <Grid item
       className='box-shadow'
       xs={ 3 }
       sx={{ 
            width: { sm: 650 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
        }}>
          
          <Typography variant='h1' sx={{ mb: 1 }}>{ title }</Typography>

            
            { children }

        </Grid>

    </Grid>

  )
}
