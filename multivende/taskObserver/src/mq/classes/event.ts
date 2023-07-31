class RabbitEvent {
  public eventType: string

  public content: object

  constructor(eventType: string, data: object, user?: object) {
    this.eventType = eventType
    this.content = { data, user }
  }
}

export default RabbitEvent
