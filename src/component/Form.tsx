import {Button,Container, Grid, Typography } from '@mui/material';
import {useState} from "react"
import { FormData } from '../types';
import { FormField } from './FormField';
const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: ''
      });
    
      const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(e.target)
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(JSON.stringify(formData)) ;
        //set data to the local storate
        localStorage.setItem("userData" , JSON.stringify(formData))
      };
    
    return (
        <Container maxWidth="sm">
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
            <Button fullWidth variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
            </form>
        </Container>
    );
};

export default Form;
