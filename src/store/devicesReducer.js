const SET_TYPES = "SET_TYPES";
const SET_BRANDS = "SET_BRANDS";
const SET_DEVICE_LIST = "SET_DEVICE_LIST";
const SET_SELECTED_TYPE = "SET_SELECTED_TYPE";
const SET_SELECTED_BRAND = "SET_SELECTED_BRAND";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_PAGE = "SET_PAGE";

const initialState = {
  types: [],
  brands: [],
  deviceList: [],
  selectedType: null,
  selectedBrand: null,
  page: 1,
  totalCount: 0,
  limit: 3,
};

const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPES:
      return { ...state, types: action.payload };
    case SET_BRANDS:
      return { ...state, brands: action.payload };
    case SET_DEVICE_LIST:
      return { ...state, deviceList: action.payload };
    case SET_SELECTED_TYPE:
      return { ...state, selectedType: action.payload };
    case SET_SELECTED_BRAND:
      return { ...state, selectedBrand: action.payload };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    case SET_PAGE:
      console.log(123, action.payload);
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export const setTypes = (types) => ({
  type: SET_TYPES,
  payload: types,
});
export const setBrands = (brands) => ({
  type: SET_BRANDS,
  payload: brands,
});
export const setDevices = (devices) => ({
  type: SET_DEVICE_LIST,
  payload: devices,
});
export const setSelectedType = (id) => ({
  type: SET_SELECTED_TYPE,
  payload: id,
});
export const setSelectedBrand = (id) => ({
  type: SET_SELECTED_BRAND,
  payload: id,
});
export const setTotalCount = (total) => ({
  type: SET_TOTAL_COUNT,
  payload: total,
});
export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});
export default devicesReducer;
