import reliableInternet from '../../images/reliableinternet.svg';
import plugInSVG from '../../images/pluginon.svg';
import SServerup from '../../images/securityserver.svg';

// the constants homeObj are based on each page.
// primary:true to highlight its default and style it.
export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Fast, Reliable Internet',
  headline: 'Fiber-fast speeds for home & business',
  description:
    'Connect instantly with speeds up to 1 Gbps, no data caps, and 99.9% uptime. Choose easy self-install or professional setup.',
  buttonLabel: 'View Plans',
  imgStart: '',
  img: reliableInternet,
  alt: 'Internet',
  start: ''
};

export const homeObjTwo = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Easy Setup',
  headline: 'Plug in, power on, you’re online',
  description:
    'Get online in minutes with our smart app and pre-configured Wi-Fi 6 router. Keep your number with free port-in.',
  buttonLabel: 'Learn More',
  imgStart: '',
  img: plugInSVG,
  alt: 'Fiber Plug',
  start: ''
};

export const homeObjFour = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Secure Network',
  headline: 'Built-in security that protects every device',
  description:
    'Automatic threat blocking, encrypted DNS, optional parental controls, and 24/7 monitoring by our network operations center.',
  buttonLabel: 'Get Started',
  imgStart: 'start',
  img: SServerup,
  alt: 'Security server',
  start: 'true'
};
