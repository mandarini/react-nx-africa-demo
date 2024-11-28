import { render } from '@testing-library/react';

import MyLib3 from './my-lib-3';

describe('MyLib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLib3 />);
    expect(baseElement).toBeTruthy();
  });
});
