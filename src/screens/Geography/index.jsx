import Grid from "@mui/material/Grid";

// project imports
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Grid container sx={{ p: "20px 20px 0px 20px" }}>
      <Header title="Geography" subtitle="Examples" />
      <Grid container justifyContent="flex-start">
        <Grid item sx={{ mt: "2em", height: "75vh" }} xs={10} sm={8}>
          <GeographyChart />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Geography;
