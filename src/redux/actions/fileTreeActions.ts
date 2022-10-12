import ActionTypes from "./utils/actionTypes";

export namespace FileTreeActions {
  export const loading = () => ({
    type: ActionTypes.LOADING,
  });
  export const ready = () => ({
    type: ActionTypes.READY,
  });
  export const updateFileTree = (data) => ({
    type: ActionTypes.UPDATE_EDITOR,
    payload: data,
  });
}
