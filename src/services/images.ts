export const makeImageUrlToProperSize = (
  publicID: string,

  height: number
) => {
  const urlBase = `http://res.cloudinary.com/dnlkezvzv/image/upload`;

  const url = `${urlBase}/h_${height}/v1701283890/${publicID}`;
  return url;
};
