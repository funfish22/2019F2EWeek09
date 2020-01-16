import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Editor from '../Editor';


storiesOf('atoms|Editor', module).add('default', () => (
    <Editor/>
))