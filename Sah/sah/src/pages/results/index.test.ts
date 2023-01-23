import { formatJobList } from './'

describe('First test:sformatJobList', () => {
    it('formatJobList avec virgule', () => {
        const expectedState2 = 'Item2,'
        expect (formatJobList({title:'Item2',listLength:3,index:1})).toEqual(expectedState2)
    })

    it('formatJobList sans virgule pour le dernier element', () => {
        const expectedState2 = 'Item3'
        expect (formatJobList({title:'Item3',listLength:3,index:2})).toEqual(expectedState2)
    })
})