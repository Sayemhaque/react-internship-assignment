import {useState}  from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { departmentData } from './departmentData';



export default function DepartmentList() {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(new Array(departmentData.length).fill(false));
  const [subChecked, setSubChecked] =useState(new Array(departmentData.length).fill([false, false]));

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };
 
  //tracking department change
  const handleDepartmentChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
  
    const subCheckedCopy = [...subChecked];
    subCheckedCopy[index] = new Array(departmentData[index].sub_departments.length).fill(event.target.checked);
  
    setChecked(newChecked);
    setSubChecked(subCheckedCopy);
  };
 
  //tracking subDepartmentChange
  const handleSubDepartmentChange = (index: number, subIndex: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const subCheckedCopy = [...subChecked];
    subCheckedCopy[index][subIndex] = event.target.checked;

    const newChecked = [...checked];
    newChecked[index] = subCheckedCopy[index].every((sub: never) => sub);

    setChecked(newChecked);
    setSubChecked(subCheckedCopy);
  };

  const children = (index: number) => (
    <Box sx={{ display: expanded ? 'flex' : 'none', flexDirection: 'column', ml: 3 }}>
      {departmentData[index].sub_departments.map((subDepartment, subIndex) => (
        <FormControlLabel
          key={subIndex}
          label={subDepartment}
          control={
            <Checkbox
              checked={subChecked[index][subIndex]}
              onChange={handleSubDepartmentChange(index, subIndex)}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <div>
      {departmentData.map((department, index) => (
        <div key={index}>
          <FormControlLabel
            label={department.department}
            control={
              <Checkbox
                checked={checked[index]}
                onChange={handleDepartmentChange(index)}
              />
            }
            labelPlacement="start"
          />
          <div onClick={handleToggleExpand} style={{ cursor: 'pointer' }}>
            {expanded ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            {/* <span>{department.department}</span> */}
          </div>
          {children(index)}
        </div>
      ))}
    </div>
  );
}
