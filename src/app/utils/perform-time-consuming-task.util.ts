export const performTimeConsumingTask = async () => {
  return new Promise<boolean>(resolve =>
    setTimeout(() => {
      resolve(true);
    }, 2000)
  );
};
