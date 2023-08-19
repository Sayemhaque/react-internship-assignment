import { Button, Container, Grid, Typography } from '@mui/material';
import { useState } from "react"
import { FormData } from '../types';
import { FormField } from './FormField';
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Form = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    //set data to the local storate
    localStorage.setItem("userData", JSON.stringify(formData))
    navigate("/dashboard")
  };

  const location = useLocation()
  const msg = location.state?.message || null
  console.log(msg)
  if (msg) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: msg,
    })
  }

  return (
    <Container  maxWidth="md"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Make the container at least viewport height
      background: 'linear-gradient(45deg, #e6e6e6, #ffffff)',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    }}>
      <Typography variant="h4" align="center" gutterBottom>
        Registaion
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <FormField
            label="Name"
            name="name"
            type='text'
            value={formData.name}
            onChange={handleChange}
          />
          <FormField
            label="Email"
            name="email"
            type='email'
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="Phone"
            name="phone"
            type='text'
            value={formData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button sx={{marginTop:"40px"}} fullWidth variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
