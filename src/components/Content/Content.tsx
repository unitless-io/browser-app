import './Content.scss';
import screenshot1 from '../../assets/images/screenshots/screenshot1.png';
import { Typography, Button } from '@mui/material';

import ButtonWithCircleText from '../ButtonWithCircleText';
import Card from '../Card';
import RouterButton from '../RouterButton';
import { ROUTES } from '../../router/constants';

export default function Content() {
  return (
    <div className='content'>
      <div className='responsive-container'>
        <div className='section-container space-between lg-mb-450 lg-pt-150 sm-pt-27'>
          <div className='content-block sm-mb-95 md-mb-150'>
            <div className='mb-70'>
              <Typography variant='h1' className='mb-3'>
                UNITLESS
              </Typography>
              <Typography variant='h3' className='mb-8'>
                Save more time for your features
              </Typography>
              <div className='text-container large'>
                <Typography variant='body1' className='gray mb-20'>
                  Create unit tests based on real data in a few clicks to make your application bulletproof.<br/>Don't waste your time on a routine
                </Typography>
                <Typography variant='body1'>
                  A Webpack plugin to take care of your JavaScript projects<br/> <span className='gray'>// Typescript support is coming</span>
                </Typography>
              </div>
            </div>
            <RouterButton
              variant="contained"
              className='large'
              to={ROUTES.SIGN_IN}
            >
              <Typography variant='button'>START INTEGRATION</Typography>
            </RouterButton>
          </div>
          <div className='content-block sm-mb-95 md-mb-150 lg-ml-40'>
            <div className='image-container'>
              <img src={screenshot1} className='shadowed-image'></img>
            </div>
            <ButtonWithCircleText />
          </div>
        </div>

        <div className='section-container space-around lg-mb-450'>
          <div className='content-block md-mb-150'>
            <div className='image-container'>
              <img src={screenshot1} className='shadowed-image'></img>
            </div>
          </div>
          <div className='content-block sm-mb-95 md-mb-150 lg-ml-40'>
            <div className='mb-40'>
              <Typography variant='h3' className='mb-8'>
                Stop guessing test cases
              </Typography>
              <div className='text-container'>
                <Typography variant='body1' className='gray mb-20'>
                  Find real edge cases using manual testing and convert it to unit tests
                </Typography>
                <Typography variant='body1'>
                  Unitless helps you reach high code coverage with minimal effort.<br/> Our software provides the ability to record function calls data while application is running, and use it for high quality unit tests
                </Typography>
              </div>
            </div>
            <Button
              variant="contained"
              href='https://www.youtube.com/watch?v=lxW4tBuhCl8'
            >
              <Typography variant='button'>DEMO</Typography>
            </Button>
          </div>
        </div>

        <div className='section-container space-around lg-mb-450'>
          <div className='content-block sm-mb-95 md-mb-150'>
            <div className='mb-40'>
              <Typography variant='h3' className='mb-8'>
                Focus on features delivery
              </Typography>
              <div className='text-container'>
                <Typography variant='body1' className='gray mb-20'>
                  Have a great code coverage by high quality unit tests without breaking a sweat
                </Typography>
                <Typography variant='body1'>
                  We're developers too, so we know how much time it takes to write unit tests from scratch.<br/> This product is designed to provide high reliability to your project over the time, while you can focus on what matters most - more features and clean code
                </Typography>
              </div>
            </div>
            <RouterButton
              variant="contained"
              className='reversed'
              to={ROUTES.SIGN_IN}
            >
              <Typography variant='button'>GET STARTED</Typography>
            </RouterButton>
          </div>
          <div className='content-block md-mb-150 lg-ml-40'>
            <div className='image-container'>
              <img src={screenshot1} className='shadowed-image'></img>
            </div>
          </div>
        </div>

        <div className='section-container sm-mb-95 md-mb-150 lg-mb-450'>
          <Typography variant='h3'>
            What do we provide?
          </Typography>
          <div className='cards lg-mt-50 sm-mt-25'>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Unit tests generation
                </Typography>
                <Typography variant='body1'>
                  Create unit tests file in a few clicks with our software
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Edge cases handling
                </Typography>
                <Typography variant='body1'>
                  Test cases are based on a real data your function is operating
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Simple integration
                </Typography>
                <Typography variant='body1'>
                  All you need to do is to add one webpack plugin to your project
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Popular testing framework support
                </Typography>
                <Typography variant='body1'>
                  We take your jest testing to a new level
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Code coverage metrics
                </Typography>
                <Typography variant='body1' className='gray'>
                  // Coming soon
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Typescript support
                </Typography>
                <Typography variant='body1' className='gray'>
                  / Coming soon
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Mocking
                </Typography>
                <Typography variant='body1' className='gray'>
                  // Coming soon
                </Typography>
              </Card>
            </div>
            <div className='card'>
              <Card isActive={false}>
                <Typography variant='body1' className='lg-mb-16 sm-mb-10 bold'>
                  Code coverage metrics
                </Typography>
                <Typography variant='body1' className='gray'>
                  // Coming soon
                </Typography>
              </Card>
            </div>
          </div>
        </div>

        <div className='section-container center'>
          <div className='column-direction center'>
            <Typography variant='h3' className='mb-8 sm-center'>
              Get rid of routine and focus on features!
            </Typography>
            <Typography variant='body1' className='mb-45 sm-center'>
              Perfect solution for your JavaScript projects.
            </Typography>
            <RouterButton
              variant="contained"
              className='circle'
              to={ROUTES.SIGN_IN}
            >
              <Typography variant='button'>START</Typography>
            </RouterButton>
          </div>
        </div>
      </div>
    </div>
  );
};
