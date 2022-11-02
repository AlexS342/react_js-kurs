import { render } from '@testing-library/react';
import Home from '../home';

it('Снимок страници Home', () => {
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
})