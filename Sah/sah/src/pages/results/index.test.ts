import { formatJobList, formatQueryParams } from './'


describe('First test:sformatJobList', () => {
    it('formatJobList avec virgule', () => {
        const expectedState2 = 'Item2,'
        expect(formatJobList({ title: 'Item2', listLength: 3, index: 1 })).toEqual(expectedState2)
    })

    it('formatJobList sans virgule pour le dernier element', () => {
        const expectedState2 = 'Item3'
        expect(formatJobList({ title: 'Item3', listLength: 3, index: 2 })).toEqual(expectedState2)
    })
})

describe('Second test: formatQueryParams', () => {
    it('should use the right format for param', () => {
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
            expectedState
        )
    })
})