import { toMatchImageSnapshot } from 'jest-image-snapshot';
import 'jest-preset-angular';
import { setDefaultOptions } from 'jsdom-screenshot';

setDefaultOptions({
  launch: { args: ['--no-sandbox'] }
});

jest.setTimeout(10000);
expect.extend({ toMatchImageSnapshot });
