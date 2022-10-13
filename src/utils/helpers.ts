import escapeStringRegexp from "escape-string-regexp";

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

export const formatFileContents = (data: string) => {
  const single_quotes = data.replace(/'/g, "\"");
  const double_quotes = single_quotes.replace(/"/g, "\\\"");
  return double_quotes;
}

export const pickLanguage = (fileName: string) => {
  const extension = fileName.split(".")[1];
  switch (extension) {
	case "js": return "javascript";
	case "css": return "css";
	case "json": return "json";
	default: return "javascript";
  }
}
