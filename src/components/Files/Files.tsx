import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import Collapse from '@mui/material/Collapse';

import {filesResponseSelector, loadFilesAction} from '../../api/requests/files';
import Functions from '../Functions/Functions';

const Files = ({ appId }: { appId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFiles = useSelector(filesResponseSelector);
  const appFiles = appId ? allFiles(appId) : [];
  const [openFiles, toggleFile] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (appId) {
      dispatch(loadFilesAction(appId));
    }
  }, [dispatch, appId]);

  return <List disablePadding={true}>
    {appFiles.map((file) =>
      <div key={file._id}>
        <ListItem>
          <ListItemIcon>
            <FileIcon />
          </ListItemIcon>
          <ListItemButton onClick={() => toggleFile({ ...openFiles, [file._id]: !openFiles[file._id] })}>
            <ListItemText primary={`${file.path}`} />
          </ListItemButton>
        </ListItem>
        <Collapse in={openFiles[file._id]} timeout="auto" unmountOnExit>
          <div style={{ paddingLeft: '96px' }}>
            <Typography variant="h6">Functions</Typography>
            <Functions fileId={file._id} />
          </div>
        </Collapse>
      </div>
    )}
  </List>;
};

export default Files;
