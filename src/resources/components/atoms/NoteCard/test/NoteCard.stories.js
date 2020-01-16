import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import NoteCard from '../NoteCard';


storiesOf('atoms|NoteCard', module).add('default', () => (
    <NoteCard/>
))