import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Freelances } from '../../pages/freelances/Freelances'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from './utils/render'
 

 
const server = setupServer(
    // On précise ici l'url qu'il faudra "intercepter"
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json(freelancersMockedData))

    })
)
 
// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())


const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]

const queryClient = new QueryClient();


test('should render freelancers', async () => {
    render(
        <QueryClientProvider client={queryClient}>
            <Freelances />
        </QueryClientProvider>
      );

    //   expect(screen.getByTestId('loader')).toBeTruthy() 

      await waitForElementToBeRemoved(() => screen.getByTestId('loader'))

      await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy()
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
    })
})