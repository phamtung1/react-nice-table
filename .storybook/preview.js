import { addDecorator } from '@storybook/react';
import {createElement} from 'react';

// needed for testing with storyshot to prevent errors related to use hook inside function
addDecorator(createElement);
