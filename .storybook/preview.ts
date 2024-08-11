
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import '../.storybook/storybook.css';

export const decorators = [
  withTests({
    results,
  }),
];import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
