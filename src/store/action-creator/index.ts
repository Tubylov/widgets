import * as WidgetListActionCreators from './widget'
import * as WidgetMoveActionCreators from './widgetMove'
import * as WidgetSettingsActionCreators from './widgetSettings'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...WidgetListActionCreators,
    ...WidgetMoveActionCreators,
    ...WidgetSettingsActionCreators
}