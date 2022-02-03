import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Main } from './Main';
export const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="linkDiv">
      <Paper>
        <Tabs
          value={value}
          onChange={(e, v) => setValue(v)}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollButtons"
          scrollButtons="auto"
        >
          <Tab key="0" label="Dashboard" />
          <Tab key="1" label={<PersonOutlineOutlinedIcon />} />
        </Tabs>
        <div>
          <Main data={value} />
        </div>
      </Paper>
    </div>
  );
};
