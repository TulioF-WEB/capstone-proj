import wifiSvg from '../../images/svg-1.svg';
import nodesSvg from '../../images/svg-3.svg';

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Internet Plans',
  headline: 'The right speed for every home',
  description:
    'Pick from Starter 100, Unlimited 400, or Fiber 1 GB/s. No data caps, transparent pricing, and 99.9% network uptime.',
  buttonLabel: 'Compare Plans',
  imgStart: '',
  img: wifiSvg,
  alt: 'Wi-Fi Signal'
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Full coverage',
  headline: 'Signal across the house',
  description:
    'Wi-Fi 6 router with optional mesh nodes. manage your network from our app with guest access and parental controls.',
  buttonLabel: 'How It Works',
  imgStart: 'start',
  img: nodesSvg,
  alt: 'Network Nodes'
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Secure Network',
  headline: 'Security with VPNs',
  description:
    'Automatic threat blocking, encrypted DNS, optional parental filters, and 24/7 monitoring by our network operations center.',
  buttonLabel: 'Get Started',
  imgStart: 'start',
  img: nodesSvg,
  alt: 'Network Security'
};
