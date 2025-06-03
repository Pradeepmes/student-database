import React, { useState } from 'react';
import StudentData from '../components/student-mock.json';
import { Modal } from '../components/Modal';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Typography,
  Box,
} from '@mui/material';

export const StudentTable = () => {
  const [students, setStudents] = useState(StudentData);
  const [editingStudent, setEditingStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (student) => {
    console.log('edit',student)
    setEditingStudent({ ...student });
    setShowModal(true);
  };
  const handleDeleteClick =(index)=>{
    const newStudent = [...students];
    newStudent.splice(index, 1);
    setStudents(newStudent);

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === editingStudent.id ? editingStudent : student
      )
    );
    setShowModal(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Data
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((item,key) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.dob}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.year}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={() => handleEditClick(item)}>
                    Edit
                  </Button>
                  <Button variant="outlined" size="small" onClick={() => handleDeleteClick(key)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {editingStudent && (
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Edit Student</Typography>

            <TextField
              label="Name"
              name="Name"
              value={editingStudent.Name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={editingStudent.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="DOB"
              name="dob"
              value={editingStudent.dob}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Mobile"
              name="mobile"
              value={editingStudent.mobile}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Year"
              name="year"
              value={editingStudent.year}
              onChange={handleChange}
              fullWidth
            />

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
              <Button variant="outlined" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Modal>
    </Box>
  );
};
