const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it('returns an array', async () => {
        expect(shuffleArray).toBeTruthy()
    })

    it('should checks if array has the same items', () => {
        const expected = ['asdf', 'fdsa', 'tgrgs']
        expect(shuffleArray(expected)).toEqual(expect.arrayContaining(expected))
    })

})



