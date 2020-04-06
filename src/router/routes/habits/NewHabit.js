import React, { useState } from "react";
import Layout from "../../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormField from "../../components/FormField";
import Async from "react-select/async";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));
const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: "Fitness", label: "Fitness" },
        { value: "Work", label: "Work" },
        { value: "Mindfullness", label: "Mindfullness" },
      ]);
    }, 1000);
  });
const groupPromiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: "Fitness", label: "Fitness" },
        { value: "Work", label: "Work" },
        { value: "Mindfullness", label: "Mindfullness" },
      ]);
    }, 1000);
  });
const viewersPromiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: "Steve123", label: "Steve Albercore" },
        { value: "James", label: "James Vanderbutt" },
        { value: "Alex37", label: "Alex The Cig Smoking Frenchy" },
      ]);
    }, 1000);
  });

function getSteps() {
  return [
    "The Habit",
    "Groups, Partners, and Viewers",
    "Resources, Meaning, Benifits",
    "Timing",
  ];
}

export default function NewHabit() {
  const [active, setActive] = useState(false);
  const [groups, setGroups] = useState();
  const [viewers, setViewers] = useState();
  const [partners, setPartners] = useState();
  const [habit, setHabit] = useState();
  const [tags, setTags] = useState();
  const [wellbeingDomains, setWelleingDomains] = useState();
  const [resources, setResources] = useState("");
  const [meaning, setMeaning] = useState("");
  const [benifits, setBenifits] = useState("");
  const [badHabit, setBadHabit] = useState();
  const [cue, setCue] = useState();
  const [recurrence, setRecurrence] = useState();
  const [time, setTime] = useState();
  const [checkInRecurrence, setCheckInReccurence] = useState();
  const [checkInTime, setCheckInTime] = useState();
  const [endDate, setEndDate] = useState();
  const [associatedGoals, setAssociatedGoals] = useState();
  const [enviroment, setEnviroment] = useState();
  const [timeNeeded, setTimeNeeded] = useState();
  const [verification, setVerification] = useState();
  const [strategy, setStrategy] = useState();
  const [measurementType, setMeasurementType] = useState();
  const [measurementUnits, setMeasurementUnits] = useState();
  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <div>
            <FormField
              label=" Group Name"
              placeholder="Group Name"
              value={groups}
              setValue={setGroups}
            />
            <p>Privacy Setting</p>
            <Async
              isMulti
              cacheOptions
              loadOptions={viewersPromiseOptions}
              label="Viewers"
              placeholder="Viewers"
              value={viewers}
              onChange={setViewers}
            />
            <p>Partners for this habit</p>
            <Async
              isMulti
              cacheOptions
              loadOptions={viewersPromiseOptions}
              label="Partners"
              placeholder="Partners"
              value={partners}
              onChange={setPartners}
            />
          </div>
        );
      case 0:
        return (
          <div>
            <FormField
              label="Name"
              placeholder="Habit Name"
              value={habit}
              setValue={setHabit}
            />
            <p>Habit Tags</p>
            <Async
              isMulti
              cacheOptions
              loadOptions={promiseOptions}
              label="Tags"
              placeholder="Habit Tags"
              value={tags}
              onChange={setTags}
            />
            <p>Domains of Well-being</p>
            <Async
              isMulti
              cacheOptions
              loadOptions={promiseOptions}
              label="Domains of Wellbeing"
              placeholder="Domains of Wellbeing"
              value={wellbeingDomains}
              onChange={setWelleingDomains}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <FormField
              label="Name"
              placeholder="Habit Name"
              value={habit}
              setValue={setHabit}
            />
            <FormField
              label="Name"
              placeholder="Habit Name"
              value={habit}
              setValue={setHabit}
            />
          </div>
        );
      case 3:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      case 4:
        return <div></div>;
      case 5:
        return <div></div>;
      default:
        return "Unknown step";
    }
  };
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Layout title="New Habit">
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </Layout>
    </div>
  );
}
