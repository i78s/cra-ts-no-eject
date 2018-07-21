// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import App from '~/App';
const Sample = () => <div>sample</div>;

storiesOf('app', module).add('to Storybook', () => <App />);
storiesOf('Welcome', module).add('to Storybook', () => <Sample />);
