import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {

  const date = new Date();
  
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialm = {
  instagram: 'https://www.instagram.com/tamwoodcareers/',
  facebook: 'https://www.facebook.com/tamwoodcareers/',
  youtube: 'https://www.youtube.com/@Tamvideos/featured',
  twitter: 'https://x.com/',
  linkedin: 'https://ca.linkedin.com/company/tamwood-international-college',
};
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our newsletter to stay up to date.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form onSubmit={(e)=>e.preventDefault()}>
          <FormInput name='email' type='email' placeholder='Your Email' />
           <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
  <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>Company</FooterLinkTitle>
      <FooterLink to='/'>About Network</FooterLink>
      <FooterLink to='/'>Careers</FooterLink>
      <FooterLink to='/'>Investor Relations</FooterLink>
      <FooterLink to='/'>Newsroom</FooterLink>
    </FooterLinkItems>
    <FooterLinkItems>
      <FooterLinkTitle>Support</FooterLinkTitle>
      <FooterLink to='/'>Help Center</FooterLink>
      <FooterLink to='/'>Network Status</FooterLink>
      <FooterLink to='/'>Contact Support</FooterLink>
      <FooterLink to='/'>Report an Outage</FooterLink>
    </FooterLinkItems>
  </FooterLinksWrapper>

  <FooterLinksWrapper>
    <FooterLinkItems>
      <FooterLinkTitle>Resources</FooterLinkTitle>
      <FooterLink to='/plans'>Setup Guides</FooterLink>
      <FooterLink to='/coverage'>Speed Test</FooterLink>
      <FooterLink to='/coverage'>Coverage Map</FooterLink>
      <FooterLink to='/sign-up'>Refer a Friend</FooterLink>
    </FooterLinkItems>
    <FooterLinkItems>
      <FooterLinkTitle>Social Media</FooterLinkTitle> 
        <FooterLink as="a" href={socialm.instagram} target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
        <FooterLink as="a" href={socialm.facebook}  target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
        <FooterLink as="a" href={socialm.youtube}   target="_blank" rel="noopener noreferrer">Youtube</FooterLink>
        <FooterLink as="a" href={socialm.twitter}   target="_blank" rel="noopener noreferrer">Twitter</FooterLink>

    </FooterLinkItems>
  </FooterLinksWrapper>
</FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/' onClick={scrollToTop}>
            <SocialIcon />
            Network
          </SocialLogo>
          <WebsiteRights>Network © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href={socialm.facebook}  target='_blank' aria-label='Facebook' rel="noopener noreferrer">
    <FaFacebook />
  </SocialIconLink>
  <SocialIconLink href={socialm.instagram} target='_blank' aria-label='Instagram' rel="noopener noreferrer">
    <FaInstagram />
  </SocialIconLink>
  <SocialIconLink href={socialm.youtube}   target='_blank' aria-label='Youtube' rel="noopener noreferrer">
    <FaYoutube />
  </SocialIconLink>
  <SocialIconLink href={socialm.twitter}   target='_blank' aria-label='Twitter' rel="noopener noreferrer">
    <FaTwitter />
  </SocialIconLink>
  <SocialIconLink href={socialm.linkedin}  target='_blank' aria-label='LinkedIn' rel="noopener noreferrer">
    <FaLinkedin />
  </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;