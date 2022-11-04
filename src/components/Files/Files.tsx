import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import Collapse from '@mui/material/Collapse';

import { filesResponseSelector, loadFilesAction } from '@app/api/requests';
import useLocalStorageState from '@app/hooks/use-local-storage-state';
import useInit from '@app/hooks/use-init';

import Functions from '../Functions/Functions';
import { GettingStarted } from '../GettingStarted';
import * as React from 'react';

const Files = () => {
  useInit(loadFilesAction);

  const allFiles = useSelector(filesResponseSelector);
  const [openFiles, toggleFile] = useLocalStorageState<Record<string, boolean>>('unitless-open-files', {});

  return allFiles.length > 0 ? (
    <>
      <Typography variant="h6">Files</Typography>
      <List disablePadding={true}>
        {allFiles.map((file) => (
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
                <Functions fileId={file._id} />
              </div>
            </Collapse>
          </div>
        ))}
      </List>
    </>
  ) : (
    <GettingStarted title="You don't have any files yet. Follow the guide below to create one." />
  );
};

export default Files;
