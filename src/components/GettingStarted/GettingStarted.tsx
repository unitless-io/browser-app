import {useSelector} from 'react-redux';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Looks1Icon from '@mui/icons-material/LooksOne';
import ListItemText from '@mui/material/ListItemText';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Paper from '@mui/material/Paper';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

import {userResponseSelector} from '../../api/requests/user';

export const GettingStarted = ({ title }: { title: string }) => {
  const user = useSelector(userResponseSelector);
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Looks1Icon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Run "npm install --save unitless-loader"</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Looks2Icon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Add this rule to your webpack config:</Typography>
          </ListItemText>
        </ListItem>
        <Paper sx={{ padding: 2, backgroundColor: '#dbdbdb', maxWidth: '600px' }}>
          &#123;<br/>&nbsp;&nbsp;test:&nbsp;/\.js$/,<br/>&nbsp;&nbsp;use:&nbsp;[<br/>&nbsp;&nbsp;&nbsp;&nbsp;&#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loader:&nbsp;'unitless-loader',<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;&#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;token:&nbsp;'{user?.appToken}',<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br/>&nbsp;&nbsp;],<br/>&#125;
        </Paper>
        <ListItem>
          <ListItemIcon>
            <Looks3Icon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Mark any of your exported functions with a special comment:</Typography>
          </ListItemText>
        </ListItem>
        <Paper sx={{ padding: 2, backgroundColor: '#dbdbdb', maxWidth: '600px' }}>
          //&nbsp;@test-next-line<br/>export&nbsp;const&nbsp;doSomethingCool&nbsp;=&nbsp;()&nbsp;=&#62;&nbsp;&#123;<br/>&nbsp;&nbsp;...<br/>&#125;;
        </Paper>
        <ListItem>
          <ListItemIcon>
            <Looks4Icon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Run your app, test your functions and come back here!</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
