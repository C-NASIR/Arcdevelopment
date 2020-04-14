import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtomArray from "../ui/ButtonArrow";
import Lottie from "react-lottie";

import animationData from "../../animations/landinganimation/data";
import CustomSoftwareIcon from "../../assets/Custom Software Icon.svg";
import MobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
//Landing page styles
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
  },
  [theme.breakpoints.down("xs")]: {
    marginLeft: 0,
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const services = [
    {
      title: "Custom Software Development",
      subtitle1: "Save Energy. Save Time. Save Money",
      subtitle2: "Complete Digital Solution, from investigation to",
      celebration: "celebration",
      altIcon: "Custom software Icon ",
    },
    {
      title: "Android/IOS App Development",
      subtitle1: "Expand Functionality. Extand Access. Increase Engagement",
      subtitle2: "Integrate Your Web Experience or Create Standalone App",
      justify: "flex-end",
      marginRight: "5em",
      altIcon: "Mobile App Icon ",
    },
    {
      title: "Website Development",
      subtitle1: "Reach more. Descover more. Sell More",
      subtitle2: "Optimized for Search Engines, Built for Speed",
      altIcon: " Website  Icon",
    },
  ];

  const findIcon = (title) => {
    switch (title) {
      case "Custom Software Development":
        return CustomSoftwareIcon;
      case "Android/IOS App Development":
        return MobileAppIcon;
      case "Website Development":
        return websiteIcon;
      default:
        break;
    }
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*----- Hero Block -----*/}
        <Grid
          container
          direction="row"
          item
          justify="flex-end"
          alignItems="center"
        >
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technologies <br /> to midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span className={{ marginRight: 10 }}> learn more </span>
                  <ButtomArray
                    height={15}
                    width={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height="100%" width="100%" />;
          </Grid>
        </Grid>
      </Grid>
      {services.map((service) => (
        <Grid item key={service.title}>
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : service.justify}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">{service.title}</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                {service.subtitle1}
              </Typography>
              <Typography variant="subtitle1">
                {service.subtitle2}{" "}
                <span className={classes.specialText}>
                  {service.celebration}
                </span>
              </Typography>
              <Button variant="outlined" className={classes.learnButton}>
                <span className={{ marginRight: 10 }}> learn more </span>
                <ButtomArray
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              style={{ marginRight: matchesSM ? 0 : service.marginRight }}
            >
              <img
                alt={service.altIcon}
                src={findIcon(service.title)}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
