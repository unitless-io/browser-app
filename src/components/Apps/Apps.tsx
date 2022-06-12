import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';

import {userResponseSelector} from '../../api/requests/user';
import {appsResponseSelector, loadAppsAction} from '../../api/requests/apps';
import Files from '../Files/Files';
import Typography from '@mui/material/Typography';

export default function Apps(props: any) {
  const dispatch = useDispatch();
  const user = useSelector(userResponseSelector);
  const apps = useSelector(appsResponseSelector);
  const [openApps, toggleApp] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (user?.appToken) {
      dispatch(loadAppsAction());
    }
  }, [dispatch, user?.appToken]);

  return <List>
    { apps?.map((app) =>
      <div key={app.token}>
        <ListItem>
          <ListItemIcon>
            <img src="/js-icon.svg" />
          </ListItemIcon>
          <ListItemButton onClick={() => toggleApp({ ...openApps, [app._id]: !openApps[app._id] })}>
            <ListItemText primary={`Application ${app.token}`} />
          </ListItemButton>
        </ListItem>
        <Collapse in={openApps[app._id]} timeout="auto" unmountOnExit>
          <div style={{ paddingLeft: '48px' }}>
            <Typography variant="h6">Files</Typography>
            <Files appId={app._id} />
          </div>
        </Collapse>
      </div>
    ) }
  </List>;
};
