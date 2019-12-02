import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Standard', () => (
    <Button disabled={boolean('Disabled', false)} onClick={() => console.log('Hello !')}>
      {text('Button label', 'Awesome button')}
    </Button>
  ));
