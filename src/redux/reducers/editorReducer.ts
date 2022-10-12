import ActionTypes from "../actions/utils/actionTypes";

export interface EditorState {
  loading: boolean;
  error: string | null;
  data: any;
  currentFile: string;
  containerId: string | null;
  port: number | null;
}

const initialState: EditorState = {
  loading: false,
  error: null,
  data: "",
  currentFile: "/app/src/App.js",
  containerId: null,
  port: null,
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
    case ActionTypes.UPDATE_EDITOR:
      return {
        ...state,
        data: action.payload,
      };
    case ActionTypes.UPDATE_CURRENT_FILE:
      return {
        ...state,
        currentFile: action.payload,
      };
    case ActionTypes.UPDATE_CONTAINER_ID:
      return {
        ...state,
        containerId: action.payload.containerId,
		port: parseInt(action.payload.port)
      };
    case ActionTypes.UPDATE_PORT:
      return {
        ...state,
        port: action.payload,
      };
    default:
      return state;
  }
};