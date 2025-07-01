import Mixpanel from 'mixpanel'
import { env } from '../env'

const mixpanelEvent = Mixpanel.init('4d04c117fce0b0cea4b1e99f482b8f34')

export function trackServerEvent(eventName: string, properties: any) {
  if (env.NODE_ENV === 'development') return
  mixpanelEvent.track(eventName, properties)
}
