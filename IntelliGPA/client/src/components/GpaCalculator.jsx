import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Delete, Add } from '@mui/icons-material'


const GpaCalculator = () => {
  const [rows, setRows] = useState([{ subject: '', grade: 'A', credit: 2 }])
const [gpaResult, setGpaResult] = useState('')
const gradeCredits = {
 'A':5,'B':4,'C':3,'D':2,'E':0,'F':0
}
const [openModal, setOpenModal] = useState(false)
const handleCloseModal = () => {
 setOpenModal(false)
}

const theme = createTheme({
 typography: {
  fontFamily: 'Poppins, sans-serif'
 }
})
  const handleAddRow = () => {
    const newRow = { subject: '', grade: 'A', credit: 2 };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleDeleteRow = (index) => {
    setRows((prevRows) => prevRows.filter((row, i) => i !== index));
  };

  const handleChange = (event, index, key) => {
    const { value } = event.target;
    setRows((prevRows) =>
      prevRows.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );
  };

  const calculateGpa = () => {
 setGpaResult(rows.map(row => gradeCredits[row.grade] * row.credit).reduce((val, acc) => 
 val + acc, 0) / rows.map(row => row.credit).reduce((val, acc) => val + acc, 0))
 setOpenModal(true)
}

const checkDegreeClass = (gpa) => {
 return gpa >= 4.5 ? 'First class' : gpa < 4.5 && gpa >= 3.5 ? 'Second class upper' : gpa < 3.5 && gpa >= 2.5 ? 'Second class lower' : 'Third class'
}
  return (
   <ThemeProvider theme={theme}>
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Credit</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    value={row.subject}
                    placeholder="e.g Organic Chemistry"
                    onChange={(event) => handleChange(event, index, 'subject')}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={row.grade}
                    onChange={(event) => handleChange(event, index, 'grade')}
                  >
                    <MenuItem value="A" default>A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                    <MenuItem value="E">E</MenuItem>
                    <MenuItem value="F">F</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    value={row.credit}
                    onChange={(event) => handleChange(event, index, 'credit')}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2} default>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDeleteRow(index)} color="error" aria-label="Delete"><Delete/></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleAddRow} color="primary" variant="contained" startIcon={<Add/>} style={{marginTop:"10px"}}>Add Course</Button>
      <div><Button onClick={calculateGpa} color="primary" variant="contained"  style={{marginTop:"10px"}}>Calculate GPA</Button></div>
<Dialog open={openModal} onClose={handleCloseModal}>
<DialogContent><div>Your GPA is {gpaResult}, that's approximately {parseFloat(gpaResult).toFixed(1)}({checkDegreeClass(parseFloat(gpaResult).toFixed(1))}{checkDegreeClass(parseFloat(gpaResult).toFixed(1)) === 'First class' ? <span>{'\u{1F632}'}</span>
: checkDegreeClass(parseFloat(gpaResult).toFixed(1)) === 'Second class upper' ? <span>{'\u{1F44F}'}</span> : checkDegreeClass(parseFloat(gpaResult).toFixed(1)) === 'Second class lower' ? <span>{'\u{1F44D}'}</span> : <span>{'\u{1F622}'}</span>})</div></DialogContent>
<DialogActions>
<Button onClick={handleCloseModal} color="primary">Close</Button>
</DialogActions>
</Dialog>
      </div>
      </ThemeProvider>
  );
};

export default GpaCalculator;
