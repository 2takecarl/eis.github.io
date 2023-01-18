import React from 'react';
import { useRef } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Modal } from '@mui/material';
import { Box } from '@mui/system';
import emailjs from '@emailjs/browser';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: "#AAFFA6",
  borderLeft: "7px solid #55FF4D",
  boxShadow: 24,
  p: 4,
};


const Contact = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    
  }
  const handleClose = () => setOpen(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7zo5hr', 'template_n8rm7wo', form.current, 'UuhAD5ILVgOZSsnye')
      .then((result) => {
          console.log(result.text);
          handleOpen();
      }, (error) => {
          console.log(error.text);
      });
  };

return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box fontSize="1.5rem">
            Success
          </Box>
          <Box fontSize="1rem">
            Your message has been sent!
          </Box>
          <br />
          <Button mb="-30px" variant="outlined" onClick={handleClose}>
            Ok
          </Button>
        </Box>
      </Modal>
      <Grid sx={{marginTop: '150px'}}>
        <Card style={{ maxWidth: 650, padding: "40px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Get a Quote
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" name="user_name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" name="user_lastname" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" name="user_email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" name="message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

    </div>
  );
}

export default Contact;