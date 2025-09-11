import { FaWifi, FaNetworkWired, FaSatelliteDish } from 'react-icons/fa';
import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Plans</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaWifi />
                </PricingCardIcon>
                <PricingCardPlan>Budget</PricingCardPlan>
                <PricingCardCost>$65.00</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 GB Speed</PricingCardFeature>
                  <PricingCardFeature>2 modems</PricingCardFeature>
                  <PricingCardFeature>IP Coverage</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaNetworkWired />
                </PricingCardIcon>
                <PricingCardPlan>Gaming</PricingCardPlan>
                <PricingCardCost>$129.90</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>400 GB Speed</PricingCardFeature>
                  <PricingCardFeature>2 modem + repeater</PricingCardFeature>
                  <PricingCardFeature>IP Coverage</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaSatelliteDish />
                </PricingCardIcon>
                <PricingCardPlan>Enterprise</PricingCardPlan>
                <PricingCardCost>$753.00</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1 TB Speeds</PricingCardFeature>
                  <PricingCardFeature>5 modems + 15 repeaters</PricingCardFeature>
                  <PricingCardFeature>VPN Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing