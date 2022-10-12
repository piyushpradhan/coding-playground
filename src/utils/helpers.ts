export const formatFileTree = (data) => {
  let fileTree = {};
  data.forEach((file) => {
    let path = file.path.split("/");
    let name = path.pop();
    let parent = path.reduce((parent, child) => {
      if (!parent[child]) {
        parent[child] = {};
      }
      return parent[child];
    }, fileTree);
    parent[name] = file;
  });
  return fileTree;
};
