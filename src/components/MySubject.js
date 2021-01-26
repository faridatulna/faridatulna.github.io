import React from 'react'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Tab, Tabs } from '@material-ui/core'

const subjectButtons = ["laravel","node.js","react","flask","kotlin","go","adobe xd","unity-c#","c++/c","python"]
const arraySubs = ["My most used web framework when it comes to build a complex and secure web platform application. Fell in love for the first time at college, I really like with its clean and organized architecture.",
"Our first time was building a web platform chatting application using DES and RES ecrypting-decrypting algorithm.",
"My orientation in 2020 until now to learn it while seek for opportunities, i was learn it for the first time at scrimba. I still adapt on how we must work with many component and write html code as JSX.",
"On my freelance experienced and waiting for graduated, i know flask as the powerful framework to work with data visualization.",
"I learn how to deal with simple-language-like-python kotlin over java for the first time and attended several online courses held by dicoding.",
"I love to learn fast tech-stack so i learn go!",
"A tool helps me for making a mock up or an app interafce with just drag and drop but should have it installed on my laptop",
"An advanced tools for making game and VR/AR model. I work with it to challenge myself building my last project as student",
"My first born language as a programmer and CS student, my first big project was tic tac toe. I used it to solve math and logic problems and always challenge myself at Hackerrank.",
"A famous data language, first time i have used it to solve customer review analysis for class project. It's very understanable, have many useful library and it's free, i always used it over R to solve data analysis and visualize the data analysis result."]

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#212529',
    '& > *': {
	      margin: theme.spacing(1),
	 },
  },
  myTabBar: {
    flexGrow: 1,
    //display: 'flex',
    //height: 224,
  },
  myTabs: {
  	width: '30%',
  	maxWidth: '30%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  myTabPanel: {
  	height: '100%',
    textAlign: 'justify',
    //width: '60%',
    //maxWidth: '70%',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let num1 = 0
  let num2 = 0

  return (
    <div className={classes.root} >
      <div position="static" color="transparent" className={classes.myTabBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          indicatorColor="secondary"
          textColor="inherit"
          backgroundColor="#212529"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
          orientation="horizontal"
        >
          {subjectButtons.map((subjects) => (
           <Tab label={subjects} {...a11yProps(num1++)}/>
          ))}
        </Tabs>

        {arraySubs.map((subs) => (
          <TabPanel value={value} index={num2++} className={classes.myTabPanel}>
            {subs}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
