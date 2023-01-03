export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
import { MemoryRouter } from 'react-router'
// import { Provider } from 'react-redux'
// import { store } from './features/store'

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      {/* <Provider store={store}> */}
      <Story />
      {/* </Provider> */}
    </MemoryRouter>
  ),
]
