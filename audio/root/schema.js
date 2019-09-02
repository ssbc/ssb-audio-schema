const definitions = require('ssb-schema-definitions')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['type', 'blob'],
  properties: {
    type: {
      type: 'string',
      pattern: '^audio$'
    },
    blob: { $ref: '#/definitions/blobId' },

    // optional
    format: {
      type: 'string',
      minLength: 2
    },
    duration: {
      type: 'number'
    },
    size: {
      type: 'integer'
    },

    // none of these
    root: { type: 'null' },
    branch: { type: 'null' }
  },
  definitions
}
