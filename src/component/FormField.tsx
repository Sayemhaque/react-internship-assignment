import { FormFieldProps } from "../types";
import { TextField,Grid} from '@mui/material';
export const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, onChange }) => (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label={label}
        variant="outlined"
        type={type}
        required
        name={name}
        value={value}
        onChange={onChange}
      />
    </Grid>
  );
  