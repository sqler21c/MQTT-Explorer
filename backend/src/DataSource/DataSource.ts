import { DataSourceState } from './'

type MessageCallback = (topic: string, payload: Buffer) => void

// A DataSource should automatically reconnect if connection was broken
interface DataSource<DataSourceOptions> {
  connect(options: DataSourceOptions): DataSourceState
  disconnect(): void
  onMessage(messageCallback: MessageCallback): void
  topicSeparator: string
}

export { DataSource, MessageCallback }
