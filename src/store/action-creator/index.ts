import * as WidgetListActionCreators from './widget'
import * as WidgetMoveActionCreators from './widgetMove'
import * as WidgetWeatherActionCreators from './widgetWeather'
import * as WidgetSettingsWeatherActionCreators from './widgetSettingsWeather'

export default {
    ...WidgetListActionCreators,
    ...WidgetMoveActionCreators,
    ...WidgetWeatherActionCreators,
    ...WidgetSettingsWeatherActionCreators
}