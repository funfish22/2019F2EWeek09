import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Logo from '../Logo';


storiesOf('atoms|Logo', module).add('default', () => (
    <Logo/>
))