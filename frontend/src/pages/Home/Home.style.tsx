import styled from 'styled-components';
import { Form } from 'formik';
import {
  borderRadius,
  colorUsage,
  fontFamily,
  fontSize,
  fontWeight,
  getSpacing,
  lineHeight,
} from 'stylesheet';
import Button from 'components/Button';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${getSpacing(10)};
  font-family: ${fontFamily.main};
`;
HomeContainer.displayName = 'HomeContainer';

export const Logo = styled.img`
  height: ${getSpacing(25)};
  margin-bottom: ${getSpacing(4)};
`;
Logo.displayName = 'Logo';

export const Title = styled.h1`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
  line-height: ${lineHeight.medium};
  margin-bottom: ${getSpacing(12)};
`;
Title.displayName = 'Title';

export const HowTo = styled.div`
  padding: ${getSpacing(6)};
  width: 100%;
  max-width: ${getSpacing(120)};
  box-sizing: border-box;
  border-radius: ${borderRadius.large};
  border: 1px dashed ${colorUsage.primaryTextColor};
`;
HowTo.displayName = 'HowTo';

export const DescriptionList = styled.ul`
  list-style: disc;
  margin-left: ${getSpacing(4)};
  margin-bottom: ${getSpacing(12)};
`;
DescriptionList.displayName = 'DescriptionList';

export const DescriptionLine = styled.li`
  font-family: ${fontFamily.main};
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.medium};
  padding-left: ${getSpacing(1)};
  margin-bottom: ${getSpacing(1)};
`;
DescriptionLine.displayName = 'DescriptionLine';

export const InputsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 340px;
`;

export const LoginButton = styled(Button)`
  align-self: center;
  margin-top: ${getSpacing(8)};
`;
