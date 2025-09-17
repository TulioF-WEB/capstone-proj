import React from 'react';
import { InfoSection } from '../../components';
import styled from 'styled-components';
import { Button } from '../../globalStyles';
import { homeObjOne, homeObjTwo } from './Data';


// styles for each component using global styles.
const AadressPlace = styled.section`
  background: #fff;
  color: #1c2237;
  padding: 60px 0;
`;

const AdressDiir = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AddTitle = styled.h2`
  font-size: 32px;
  line-height: 1.2;
  margin: 0 0 12px;
`;

const AddSubs = styled.p`
  font-size: 18px;
  color: #7a8b9a;
  margin: 0 0 24px;
`;

const AddFm = styled.form`
  width: 100%;
  max-width: 640px;
  display: flex;
  gap: 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddInp = styled.input`
  flex: 1;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid #dfe3ea;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #64b5f6;
    box-shadow: 0 0 0 3px rgba(100, 181, 246, 0.25);
  }
`;
// prevent submit
function Products() {
  const onCheck = (e) => {
    e.preventDefault(); 
  };

  return (
    <>
      <InfoSection {...homeObjOne} />
      <AadressPlace>
        <AdressDiir>
          <AddTitle>Check the coverage at your address</AddTitle>
          <AddSubs>Enter your street address.</AddSubs>

          <AddFm onSubmit={onCheck}>
            <AddInp
              name="address"
              type="text"
              placeholder="Street, your city, State"
              required
            />
            <Button as="button" type="submit" primary>
              check availablity
            </Button>
          </AddFm>
        </AdressDiir>
      </AadressPlace>
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;