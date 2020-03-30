/**
 *  Imports
 */
import {
  SET_INITIAL_PATIENTS_DATA,
  UPATE_PATIENT_DATA,
  ADD_PATIENT_DATA,
} from '../actionConstants/index';

/** Initial State  */
const INITIAL_STATE = {covidData: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_INITIAL_PATIENTS_DATA:
      return {covidData: action.payload};
    case UPATE_PATIENT_DATA:
      const updateResult = state.covidData.map((element) =>
        element.id === action.payload
          ? {...element, TestResult: !element.TestResult}
          : element,
      );
      return {covidData: updateResult};
    case ADD_PATIENT_DATA:
      return {covidData: [...state.covidData, action.payload]};
    default:
      return {...state};
  }
}
