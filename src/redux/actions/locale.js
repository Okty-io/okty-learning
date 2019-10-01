import * as types from '../constants/locale';
import { navigate } from "./navigation";

export const updateLocale = (locale, dispatch) => {

    dispatch(navigate('')) // TODO

    return {
        type: types.UPDATE,
        payload: { locale }
    }
}
