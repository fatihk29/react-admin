import Grid from "@mui/material/Grid";

// project imports
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Bar = () => {
  return (
    <Grid container sx={{ p: "20px 20px 0px 20px" }}>
      <Header title="Pie Chart" subtitle="Examples" />
      <Grid container justifyContent="flex-start">
        <Grid item sx={{ mt: "2em", height: "75vh" }} xs={10} sm={8}>
          <PieChart />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Bar;
