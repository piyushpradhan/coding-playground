import { Dispatch } from "redux";
import ActionTypes, { Action } from "./utils/actionTypes";

export const updateContainer = (containerId: string, port: string) => {
  const action: Action = {
	type: ActionTypes.UPDATE_CONTAINER_ID,
	payload: { containerId, port },
  };
  return dispatchAction(action);
}

export const loadingState = () => {
  const action: Action = {
    type: ActionTypes.LOADING,
  };
  return dispatchAction(action);
};

export const readyState = () => {
  const action: Action = {
	type: ActionTypes.READY,
  };

  return dispatchAction(action);
};

export const updateEditorContentActions = (
  content: string,
  filePath: string
) => {
  const action: Action = {
	type: ActionTypes.UPDATE_EDITOR,
	payload: content,
  };

  return dispatchAction(action);
};

export const updateCurrentFile = (filePath: string) => {
  const action: Action = {
	type: ActionTypes.UPDATE_CURRENT_FILE,
	payload: filePath,
  };
  
  return dispatchAction(action);
};

export const updatePort = (port: number) => {
   const action: Action = {
	type: ActionTypes.UPDATE_PORT,
	payload: port,
  };

  return dispatchAction(action);
};

export const dispatchAction = (action: Action) => {
  return (dispatch: Dispatch) => {
	dispatch(action);
  }
}

// export const getContainerId = () => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionTypes.LOADING,
//     });
//     fetch(process.env.REACT_APP_BASE_URL + "/api/containerId")
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({
//           type: ActionTypes.READY,
//         });
//         dispatch({
//           type: ActionTypes.UPDATE_EDITOR,
//           payload: data,
//         });
//       })
//       .catch((err) => {
//         dispatch(EditorActions.ready());
//         dispatch(EditorActions.updateEditor(err));
//       });
//   };
// };

