const test = require('tape')
const valid = require('./validator')

const Mock = () => {
  return {
    type: 'audio',
    blob: '&dEBa9Ujhrydu3A07QiuSosPmU9JwKkXpq4AKgi8PYPc=.sha256',
    format: 'aac',
    duration: 10,
    size: 44
  }
}

test('is-audio', t => {
  const fullMsg = Mock()
  t.true(valid(fullMsg), 'with all optional fields')

  const minimalMsg = Mock()
  delete minimalMsg.format
  delete minimalMsg.duration
  delete minimalMsg.size
  t.true(valid(minimalMsg), 'minimal')

  // FAILS:
  const notType = Mock()
  notType.type = 'recording'
  t.false(valid(notType), 'fail: not right type')

  const notBlob = Mock()
  notBlob.blob = '&goto my website.com'
  t.false(valid(notBlob), 'fail: not valid blob')

  const numberFormat = Mock()
  numberFormat.format = 4
  t.false(valid(numberFormat), 'fail: number format')

  const shortFormat = Mock()
  shortFormat.format = 'a'
  t.false(valid(shortFormat), 'fail: format too short')

  const stringDuration = Mock()
  stringDuration.duration = 'twelve seconds'
  t.false(valid(stringDuration), 'fail: string duration')

  const stringSize = Mock()
  stringSize.size = '44'
  t.false(valid(stringSize), 'fail: string size')

  const floatSize = Mock()
  floatSize.size = 44.6
  t.false(valid(floatSize), 'fail: float size')

  const nullField = Mock()
  nullField.format = null
  t.false(valid(nullField), 'fail: null fields not valid')

  t.end()
})
