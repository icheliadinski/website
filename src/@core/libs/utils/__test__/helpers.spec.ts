import { noop } from '../helpers'

describe('[Helpers]', () => {
  describe('noop', () => {
    it('returns nothing', () => {
      const actual = noop()
      expect(actual).toBeUndefined()
    })
  })
})
