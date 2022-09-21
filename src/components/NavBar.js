import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router"

import { makeStyles } from "@material-ui/core/styles";
import bgimage from "./images/back2.png"


const useStyles = makeStyles({
    topUl: {
        display: 'flex',
        listStyle: "none",

    },
    topLi: {
        padding: "5px",
        fontWeight: "600",
        fontSize: "18px",
        cursor: "pointer",
    }
});
const NavBar = () => {
    const classes = useStyles();

    return (
        <>
            <Grid sx={{ display: "flex", justifyContent: "space-around", padding: "10px 120px",  }}>
                <h2 style={{ color: "#fff" }}>Logo</h2>
                <ul className={classes.topUl}>
                    <li className={`top-list ${classes.topLi}`}>Blog</li>
                    <li className={`top-list ${classes.topLi}`}>Location</li>
                    <li className={`top-list ${classes.topLi}`}>Career</li>
                    <li className={`top-list ${classes.topLi}`}>Sign In</li>
                    <li className={`top-list ${classes.topLi}`}>Search</li>
                </ul>

            </Grid>

        </>
    )
}

export default NavBar;