import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Standard', () => <Button onClick={() => console.log('Hello !')}>Hello Button</Button>)
  .add('Disabled', () => (
    <Button disabled onClick={() => console.log('Hello !')}>
      Hello Button
    </Button>
  ));
