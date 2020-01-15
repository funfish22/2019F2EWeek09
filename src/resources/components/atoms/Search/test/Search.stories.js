import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import 'resources/assets/icon/style.css'
import '../../../../../storybook.css';
import Search from '../Search';


storiesOf('atoms|Search', module).add('default', () => (
    <Search/>
))