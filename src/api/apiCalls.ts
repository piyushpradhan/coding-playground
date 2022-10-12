export const startContainer = async () => {
  const response = await fetch(
    process.env.REACT_APP_BASE_URL + "/containers/start",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
};

export const updateContainerFileContents = (
  containerId: string,
  content: string,
  filePath: string
) => {
  fetch(process.env.REACT_APP_BASE_URL + `/containers/${containerId}/exec`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: `echo ${content} > ${filePath}`,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
};

export const fetchFileContents = async (
  containerId: string,
  filePath: string
) => {
  const contents = await fetch(
    process.env.REACT_APP_BASE_URL + `/containers/${containerId}/exec`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `cat ${filePath}`,
    }
  );
  return contents.json();
};
