import { render } from '@testing-library/react';

import MyLib4 from './my-lib-4';

describe('MyLib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLib4 />);
    expect(baseElement).toBeTruthy();
  });
});
