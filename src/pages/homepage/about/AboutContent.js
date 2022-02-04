import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {FiCheckCircle} from 'react-icons/fi';

export default function AboutContent(props) {

  return (
    <List
      sx={{ width: '100%', maxWidth: '100%', bgcolor: 'transparent', }}
    >
      <ListItemButton sx={{ paddingLeft: '0',}}>
        <ListItemIcon className="list_icon">
          <FiCheckCircle />
        </ListItemIcon>
        <ListItemText className="list_text" primary={props.aboutprimary} secondary={props.aboutsecondary} />
      </ListItemButton>
      
    </List>
  );
}
