import './Content.scss';
import screenshot1 from '../../assets/images/screenshots/screenshot1.png';
import { Typography, Button } from '@mui/material';

import ButtonWithCircleText from '../ButtonWithCircleText';
import Card from '../Card';

export default function Content() {
  return (
    <div className='content'>
      <div className='responsive-container'>
        <div className='section-container space-between mb-450 pt-150'>
          <div className='content-block'>
            <div className='mb-70'>
              <Typography variant='h1' className='mb-3'>
                UNITLESS
              </Typography>
              <Typography variant='h3' className='mb-8'>
                Save more time for your features
              </Typography>
              <Typography variant='body1' className='gray mb-20'>
                Create unit tests based on real data in a few clicks to make <br/> your application bulletproof.<br/>Don't waste your time on a routine
              </Typography>
              <Typography variant='body1'>
                A Webpack plugin to take care of your JavaScript projects<br/> <span className='gray'>// Typescript support is coming</span>
              </Typography>
            </div>
            <Button
              variant="contained"
              className='large'
              href='/sign-in'
            >
              <Typography variant='button'>START INTEGRATION</Typography>
            </Button>
          </div>
          <div className='content-block'>
            <img src={screenshot1} className='shadowed-image' width={555} height={578}></img>
            <ButtonWithCircleText />
          </div>
        </div>

        <div className='section-container space-between mb-450'>
          <div className='content-block'>
            <img src={screenshot1} className='shadowed-image' width={555} height={578}></img>
          </div>
          <div className='content-block'>
            <div className='mb-40'>
              <Typography variant='h3' className='mb-8'>
                Stop guessing test cases
              </Typography>
              <Typography variant='body1' className='gray mb-20'>
                Find real edge cases using manual testing<br/> and convert it to unit tests
              </Typography>
              <Typography variant='body1'>
                Unitless helps you reach high code coverage<br/> with minimal effort.<br/> Our software provides the ability to record <br/> function calls data while application is running,<br/> and use it for hiqh quality unit tests
              </Typography>
            </div>
            <Button
              variant="contained"
              href='https://www.youtube.com/watch?v=lxW4tBuhCl8'
            >
              <Typography variant='button'>DEMO</Typography>
            </Button>
          </div>
        </div>

        <div className='section-container space-between mb-450'>
          <div className='content-block'>
            <div className='mb-40'>
              <Typography variant='h3' className='mb-8'>
                Focus on features delivery
              </Typography>
              <Typography variant='body1' className='gray mb-20'>
                Have a great code coverage by high<br/> quality unit tests without breaking a sweat
              </Typography>
              <Typography variant='body1'>
                We're developers too, so we know how much<br/> time it takes to write unit tests from scratch.<br/> This product is designed to provide high<br/> reliability to your project over the time, while<br/> you can focus on what matters most - more<br/> features and clean code
              </Typography>
            </div>
            <Button
              variant="contained"
              className='reversed'
              href='/sign-in'
            >
              <Typography variant='button'>GET STARTED</Typography>
            </Button>
          </div>
          <div className='content-block'>
            <img src={screenshot1} className='shadowed-image' width={555} height={578}></img>
          </div>
        </div>

        <div className='section-container mb-450'>
          <Typography variant='h3' className='mb-50'>
            What do we provide?
          </Typography>
          <div className='cards'>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='mb-16 bold'>
                  Unit tests generation
                </Typography>
                <Typography variant='body1'>
                  Create unit tests file in a few clicks<br/> with our software
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='mb-16 bold'>
                  Edge cases handling
                </Typography>
                <Typography variant='body1'>
                  Test cases are based on a real data<br/> your function is operating
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='mb-16 bold'>
                  Simple integration
                </Typography>
                <Typography variant='body1'>
                  All you need to do is to add one webpack plugin to your project
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='mb-16 bold'>
                  Popular testing framework support
                </Typography>
                <Typography variant='body1'>
                  We take your jest testing to a new level
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='mb-16 bold'>
                  Code coverage metrics
                </Typography>
                <Typography variant='body1' className='gray'>
                  // Coming soon
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='mb-16 bold'>
                  Typescript support
                </Typography>
                <Typography variant='body1' className='gray'>
                  / Coming soon
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='mb-16 bold'>
                  Mocking
                </Typography>
                <Typography variant='body1' className='gray'>
                  // Coming soon
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='mb-16 bold'>
                  Code coverage metrics
                </Typography>
                <Typography variant='body1' className='gray'>
                  // Coming soon
                </Typography>
              </Card>
            </div>
          </div>
        </div>

        <div className='section-container mb-140 center'>
          <div className='column-direction center center-align'>
            <Typography variant='h3' className='mb-8'>
              Get rid of routine and focus on features!
            </Typography>
            <Typography variant='body1' className='mb-45'>
              Perfect solution for your JavaScript projects.
            </Typography>
            <Button
              variant="contained"
              className='circle'
              href='/sign-in'
            >
              <Typography variant='button'>START</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
