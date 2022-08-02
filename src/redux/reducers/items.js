import { GET_ITEMS_FAIL, GET_ITEMS_SUCCESS } from "./../actions/types";

const initialState = {
  items: null,
  search_items: null,
  data: null,
};

export default function Items(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        search_items:
          payload.item.props.pageProps.initialData.searchResult.itemStacks[0]
            .items,
        data: payload,
      };
    case GET_ITEMS_FAIL:
      return state;
    default:
      return state;
  }
}
