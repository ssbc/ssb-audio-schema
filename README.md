# ssb-audio-schema

a module which provides you schemas and validators for audio messages

## Example Usage

```js
var { isAudio } = require('ssb-audio-schema')

const testMsg = {
  type: 'audio',
  blob: '&dEBa9Ujhrydu3A07QiuSosPmU9JwKkXpq4AKgi8PYPc=.sha256',
  format 'aac',
  duration: 10,
  size: 44
}
// can be the content of a message or the whole thing

isAudio(testMsg)
// => true

isAudio.errors
// => helpful errors from last failure (none in this case!)
```

## API

### `isAudio(Object) -> Boolean`

`Object` can be a full message from the log, or just the content from the message, the validator will take care of it.

If the test Object fails the validation, errors are attached to the function (i.e. `isAudio.errors`, see [Example Usage](#example-usage))


```js
isAudio(Object, { attachErrors: true })
```

## Notes of fields

Field | type | description
---|---|---
`type` | String| must be "audio"
`blob` | String | has to be a valid ssb-blob ref
`format` | String | (optional) min-length of 2, [see IANA audio formats](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
`duration` | Number | (optional) length of the audio in seconds
`size` | Integer | (optional) size of the audio in bytes

## See also

- the README in each folder with a little more about each message type

