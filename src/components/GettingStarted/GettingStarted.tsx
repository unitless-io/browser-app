import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Looks1Icon from '@mui/icons-material/LooksOne';
import ListItemText from '@mui/material/ListItemText';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Paper from '@mui/material/Paper';

export const GettingStarted = ({ title }: { title: string }) => {
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Looks1Icon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Mark any of your exported arrow functions with a special comment:</Typography>
          </ListItemText>
        </ListItem>
        <Paper sx={{ padding: 2, backgroundColor: '#dbdbdb', maxWidth: '600px' }}>
          //&nbsp;@unitless-io:test
          <br />
          export&nbsp;const&nbsp;doSomethingCool&nbsp;=&nbsp;()&nbsp;=&#62;&nbsp;&#123;
          <br />
          &nbsp;&nbsp;...
          <br />
          &#125;;
        </Paper>
        <ListItem>
          <ListItemIcon>
            <Looks2Icon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Run your app, test your functions and come back here!</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
