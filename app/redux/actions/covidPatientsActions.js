import {
  SET_INITIAL_PATIENTS_DATA,
  UPATE_PATIENT_DATA,
  ADD_PATIENT_DATA,
} from '../actionConstants/index';

function initData(data) {
  return {
    type: SET_INITIAL_PATIENTS_DATA,
    payload: data,
  };
}

export function setInitialData() {
  return (dispatch) => {
    const data = [
      {
        Name: 'Lisa cop',
        Country: 'UK',
        Age: '80',
        TestResult: true,
        id: '123231662',
      },
      {
        Name: 'Adam Gill',
        Country: 'UK',
        Age: '40',
        TestResult: false,
        id: '124223343',
      },
      {
        Name: 'Kate',
        Country: 'AUS',
        Age: '20',
        TestResult: false,
        id: '157099872',
      },
      {
        Name: 'Jon Abam',
        Country: 'USA',
        Age: '80',
        TestResult: true,
        id: '1889893',
      },
      {
        Name: 'Kin kim',
        Country: 'Thiland',
        Age: '40',
        TestResult: true,
        id: '188989343',
      },
    ];

    dispatch(initData(data));
  };
}

export function updateTestResult(updatedStatus) {
  return {
    type: UPATE_PATIENT_DATA,
    payload: updatedStatus,
  };
}

export function addNewRecord(newData) {
  return {
    type: ADD_PATIENT_DATA,
    payload: newData,
  };
}
