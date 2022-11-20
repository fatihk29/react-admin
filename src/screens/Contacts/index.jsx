import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// project imports
import Header from "../../components/Header";
import { COLORS } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

const Contacts = () => {
  const theme = useTheme();
  const colors = COLORS(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    {
      field: "registerId",
      headerName: "Register ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <Grid container sx={{ p: "20px 20px 0px 20px" }}>
      <Grid item xs={12} sm={12} md={10}>
        <Header title="Contacts" subtitle="List of Contact" />
        <Grid
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]}  !important`,
            },
          }}
        >
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contacts;
