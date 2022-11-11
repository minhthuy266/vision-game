function getToken(token) {
  return `Bearer ${token}`;
}

export const generateHeader = (token) => {
  let header = {
    "Content-Type": "application/json",
  };

  const access_token = getToken(token);
  return {
    ...header,
    Authorization: `${access_token}`,
  };
};
