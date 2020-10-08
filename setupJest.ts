import { toMatchImageSnapshot } from 'jest-image-snapshot';
import 'jest-preset-angular';

// tslint:disable-next-line:no-any
expect.extend({ toMatchImageSnapshot });
