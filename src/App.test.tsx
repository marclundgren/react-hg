import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('hg-header');
  expect(element).toBeInTheDocument();
});
test('renders navigation', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('hg-navigation');
  expect(element).toBeInTheDocument();
});
test('renders aside', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('hg-aside');
  expect(element).toBeInTheDocument();
});
test('renders main', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('hg-main');
  expect(element).toBeInTheDocument();
});
test('renders footer', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId('hg-footer');
  expect(element).toBeInTheDocument();
});