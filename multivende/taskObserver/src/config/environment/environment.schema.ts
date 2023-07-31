const schema = {
  api: {
    type: 'object',
    props: {
      port: { type: 'string' },
      env: { type: 'string' }
    }
  },
  logger: {
    type: 'object',
    props: {
      level: { type: 'string' }
    }
  },
  mq: {
    type: 'object',
    props: {
      username: 'string',
      password: 'string',
      hostname: 'string',
      port: 'string',
      vhost: 'string',
      protocol: 'string'
    }
  }
}

export default schema
