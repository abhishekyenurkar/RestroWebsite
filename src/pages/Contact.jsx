import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <>
      <Layout>
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4">Contact My Resturant</Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptatum quis voluptatibus dicta ut soluta quae non omnis vitae.
          Quisquam in quaerat aspernatur porro harum tenetur hic aut ipsum
          corrupti.
        </Box>
        <Box sx={{m:3,width:'600px',ml:10,"@media(max-width:600px)":{
          width:'300px'
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableCell sx={{backgroundColor:'black',color:'white'}}align="center">Contact Details</TableCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                1800-00-0000 (tollfree)
                  </TableCell>
                 
                </TableRow>

                <TableRow>
                <TableCell>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} />help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{ color: "skyblue", pt: 1 }} />7798409915
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
