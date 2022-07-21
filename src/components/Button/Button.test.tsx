import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Button', () => {
    test('renders the Button component', () => {
        const result = render(<Button>Hello world</Button>).findByText('Hello world');

        expect(result).toBeTruthy();
    });
});
