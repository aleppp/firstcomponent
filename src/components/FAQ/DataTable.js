import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function createData(id, appSection, question, answer, order, visibility) {
  return { id, appSection, question, answer, order, visibility };
}

const rows = [
  createData(
    "FAQ01",
    "AlphaOil",
    "Question bla bla bla",
    "Answer bla bla bla",
    1,
    "Yes"
  ),
  createData(
    "FAQ02",
    "Petronas Up",
    "Question bla bla bla",
    "Answer bla bla bla",
    3,
    "Yes"
  ),
  createData(
    "FAQ03",
    "AlphaOil",
    "Question bla bla bla",
    "Answer bla bla bla",
    2,
    "No"
  ),
  createData(
    "FAQ04",
    "AlphaOil",
    "Question bla bla bla",
    "Answer bla bla bla",
    3,
    "Yes"
  ),
  createData(
    "FAQ05",
    "Setel",
    "Question bla bla bla",
    "Answer bla bla bla",
    2,
    "No"
  ),
];

function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FAQ ID</TableCell>
            <TableCell align="center">Application Section</TableCell>
            <TableCell align="center">Question</TableCell>
            <TableCell align="center">Answer</TableCell>
            <TableCell align="center">Order</TableCell>
            <TableCell align="center">Visibility</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.appSection}</TableCell>
              <TableCell align="center">{row.question}</TableCell>
              <TableCell align="center">{row.answer}</TableCell>
              <TableCell align="center">{row.order}</TableCell>
              <TableCell align="center">{row.visibility}</TableCell>
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="secondary" size="small">
                    Preview
                  </Button>
                  <Button variant="contained" color="primary" size="small">
                    Edit
                  </Button>
                  <Button variant="contained" color="error" size="small">
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
