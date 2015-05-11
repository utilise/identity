var expect = require('chai').expect
  , identity = require('./')

describe('identity', function() {
  it('should return first arg', function() {
    expect(identity(String)).to.equal(String)
  })
})