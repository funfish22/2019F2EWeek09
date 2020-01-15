import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import AddNoteButton from '../AddNoteButton';


storiesOf('atoms|AddNoteButton', module).add('default', () => (
    <AddNoteButton/>
))