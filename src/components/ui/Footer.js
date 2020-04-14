import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdirnment from "../../assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
//Styles
const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1500,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-5em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

//Footer
export default function Footer(props) {
  const classes = useStyle();

  //   const linkgroups = [
  //     {
  //       navs: ["home"],
  //     },
  //     {
  //       navs: [
  //         "Service",
  //         "Custom Software Development",
  //         "Mobile App Development",
  //         "Website Development",
  //       ],
  //     },
  //     {
  //       navs: ["The Revolution", "Vision", "Technology", "Process"],
  //     },
  //     { navs: ["About Us", "History", "Team"]["Contact Us"] },
  //   ];

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                component={Link}
                to="/mobileapps"
              >
                Android/IOS App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="/websites"
              >
                Website Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                component={Link}
                to="/customsoftware"
              >
                Custom Software Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="footer black line"
        src={footerAdirnment}
      />
      <Grid
        container
        justify="flex-end"
        className={classes.socialContainer}
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
          href="https://www.facebook.com"
        >
          <img alt="facebook logo" src={facebook} />
        </Grid>
        <Grid
          item
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
          href="https://www.twitter.com"
        >
          <img alt="twitter logo" src={twitter} />
        </Grid>
        <Grid
          item
          component={"a"}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.icon}
          href="https://www.instagram.com"
        >
          <img alt="instagram logo" src={instagram} />
        </Grid>
      </Grid>
    </footer>
  );
}
