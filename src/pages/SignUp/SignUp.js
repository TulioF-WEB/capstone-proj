import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { InfoSection } from '../../components';
import { Button } from '../../globalStyles';
import { homeObjOne } from './Data';

const FormSection = styled.section`
  background: #fff;
  color: #1c2237;
  padding: 60px 0;
`;

const FormContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 1.2;
  margin: 0 0 12px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #7a8b9a;
  margin: 0 0 24px;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
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

const Select = styled.select`
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
// getting the search prop from location obj
function SignUp() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const defaultEmail = params.get('email') || '';
// params will get the parameters from the URL (to identify which page)
  const [form, setForm] = React.useState({
    name: '',
    email: defaultEmail,
    address: '',
    plan: 'Starter 100'
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault(); // so it doesn't work
  };

  return (
    <>
      <InfoSection {...homeObjOne} />
      <FormSection>
        <FormContainer>
          <Title>Please, finish your sign up</Title>
          <Subtitle>Choose a plan and schedule the date of installation.</Subtitle>

          <Form onSubmit={onSubmit}>
            <Row>
              <Input
                name="name"
                type="text"
                placeholder="your full name"
                value={form.name}
                onChange={onChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="your Email"
                value={form.email}
                onChange={onChange}
                required
              />
            </Row>
            <Input
              name="address"
              type="text"
              placeholder="Service Address (e.g., your street, your city, State)"
              value={form.address}
              onChange={onChange}
              required
            />
            <Row>
              <Select name="plan" value={form.plan} onChange={onChange}>
                <option>Starter 100</option>
                <option>Pro 400</option>
                <option>Fiber 1 GB/S</option>
              </Select>
              <Button as="button" type="submit" primary>
                continue
              </Button>
            </Row>
          </Form>
        </FormContainer>
      </FormSection>
    </>
  );
}
export default SignUp;
