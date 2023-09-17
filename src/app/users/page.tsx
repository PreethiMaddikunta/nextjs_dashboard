'use client';
import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { userData } from "../data";
import "./User.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Users = () => {
  const columns = useMemo(() => [
    {
      accessorKey: "name.firstName",
      Header: "First Name",
      id: "firstName", // Unique identifier for the column
    },
    {
      accessorKey: "name.lastName",
      Header: "Last Name",
      id: "lastName",
    },
    {
      accessorKey: "address", //normal accessorKey
      Header: "Address",
      id: "address",
    },
    {
      accessorKey: "city",
      Header: "City",
      id: "city"
    },
    {
      accessorKey: "state",
      Header: "State",
      id: "state",
    },
  ],[]);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: "dark",
      },
    }),[]
  );



  return (
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <MaterialReactTable columns={columns} data={userData} />
      </ThemeProvider>
    </div>
  );
};

export default Users;
