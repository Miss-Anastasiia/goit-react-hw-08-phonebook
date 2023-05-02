import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StartPage = () => {
  const welcomeMessage = `Welcome to the Phonebook`;
  return (
    <Box
      sx={{
       
        textAlign:'center',
        bgcolor: 'background.main',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        color="inherit"
        sx={{ flexGrow: 1 }}
      >
        {welcomeMessage}
      </Typography>
    </Box>
  );
};

export default StartPage;