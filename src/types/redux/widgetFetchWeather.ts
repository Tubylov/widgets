export interface FetchWeatherState {
    widgetID: string;
    temperature: number;
    loading: boolean;
    error: null | string;
}
export enum FetchWeatherActionTypes {
    FETCH_WHEATHER = "FETCH_WHEATHER",
    FETCH_WHEATHER_SUCCESS = "FETCH_WHEATHER_SUCCESS",
    FETCH_WHEATHER_ERROR = "FETCH_WHEATHER_ERROR"
}
interface FetchWeatherAction {
    type: FetchWeatherActionTypes.FETCH_WHEATHER;
}
interface FetchWeatherSuccessAction {
    type: FetchWeatherActionTypes.FETCH_WHEATHER_SUCCESS;
    payload: {temp: number, widgetID: string};
}
interface FetchWeatherErrorAction {
    type: FetchWeatherActionTypes.FETCH_WHEATHER_ERROR;
    payload: string;
}

export type WeatherAction = FetchWeatherAction | FetchWeatherSuccessAction | FetchWeatherErrorAction
