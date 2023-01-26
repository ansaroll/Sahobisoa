import { render as rtlRender } from '@testing-library/react'
import { ThemeDarkLightProvider } from '../../../utils/context'
import * as React from 'react';
 
function Wrapper({ children }: { children:JSX.Element }) {
    return <ThemeDarkLightProvider>{children}</ThemeDarkLightProvider>
}
 
export function render(ui: JSX.Element) {
    rtlRender(ui, { wrapper: Wrapper })
}