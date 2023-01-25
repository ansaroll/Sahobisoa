import { screen, render } from '@testing-library/react'
import Footer from '../Footer'


describe("Footer:",() => {
    test('render Footer', async () => { 
        render(
            <Footer/>
        )
     })
})