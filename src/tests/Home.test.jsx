import { screen } from '@testing-library/react';
import Home from '../pages/Home';
import { renderTheme } from '../styles/RenderTheme';

it('should test', () => {
  renderTheme(<Home />);
  expect(screen.getByRole('heading')).toMatchSnapshot();
});
