export const isInCollection = (id: string, collection: any[]) => {
  const checkPresence = collection.find((element: any) => element._id === id);
  if (checkPresence) {
    return true;
  } else {
    return false;
  }
};
