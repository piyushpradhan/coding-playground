import ActionTypes from "./utils/actionTypes";

export namespace EditorActions {
  export const save = (data: any) => ({
    type: ActionTypes.SAVE,
    payload: data,
  });
  export const loading = () => ({
    type: ActionTypes.LOADING,
  });
  export const ready = () => ({
    type: ActionTypes.READY,
  });
}
