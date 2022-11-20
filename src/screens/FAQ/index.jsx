import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import { useTheme } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// project imports
import Header from "../../components/Header";
import { COLORS } from "../../theme";

const askeqQuestions = [
  { id: 1, question: "question", answer: "answer" },
  { id: 2, question: "question", answer: "answer" },
  { id: 3, question: "question", answer: "answer" },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = COLORS(theme.palette.mode);

  return (
    <Grid container sx={{ p: "20px 20px 0px 20px" }}>
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />
      <Grid container justifyContent="flex-start">
        <Grid item sx={{ mt: "2em" }} xs={10} sm={8}>
          {askeqQuestions.map((i) => (
            <Grid container direction="column" sx={{ mb: "1em" }} key={i.id}>
              <Grid item>
                <Accordion defaultExpanded={false}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                      {i.id}
                      {". "}
                      {i.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color={colors.grey[300]} variant="h5">
                      {i.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FAQ;
