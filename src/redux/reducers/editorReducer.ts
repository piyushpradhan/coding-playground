import ActionTypes from "../actions/utils/actionTypes";

export interface EditorState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: EditorState = {
  loading: false,
  error: null,
  data: null,
};

export const editorReducer = (
  state: EditorState = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.READY:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
