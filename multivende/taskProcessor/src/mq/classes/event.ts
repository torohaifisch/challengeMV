class RabbitEvent {
  public eventType: string

  public content: object

  constructor(eventType: string, data: object) {
    this.eventType = eventType
    this.content = data
  }
}

export default RabbitEvent
