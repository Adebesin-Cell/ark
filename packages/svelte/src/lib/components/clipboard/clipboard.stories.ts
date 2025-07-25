import type { Meta } from '@storybook/svelte'
import BasicExample from './examples/basic.svelte'
import ContextExample from './examples/context.svelte'
import ControlledExample from './examples/controlled.svelte'
import CustomTimeoutExample from './examples/custom-timeout.svelte'
import RootProviderExample from './examples/root-provider.svelte'
import ValueTextExample from './examples/value-text.svelte'

const meta: Meta = {
  title: 'Components/Clipboard',
}

export default meta

export const Basic = {
  render: () => ({
    Component: BasicExample,
  }),
}

export const Context = {
  render: () => ({
    Component: ContextExample,
  }),
}

export const Controlled = {
  render: () => ({
    Component: ControlledExample,
  }),
}

export const CustomTimeout = {
  render: () => ({
    Component: CustomTimeoutExample,
  }),
}

export const RootProvider = {
  render: () => ({
    Component: RootProviderExample,
  }),
}

export const ValueText = {
  render: () => ({
    Component: ValueTextExample,
  }),
}
