import {describe, expect, it} from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';


describe('Simple working test', () => {
    it('the title is visible', () => {
        render(<App />);
        expect(screen.getByText(/Hello world/i)).toBeInTheDocument();
    });
});