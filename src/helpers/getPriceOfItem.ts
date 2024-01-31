export const getPriceOfItem = (price: string, discount: string): string => {
  if (discount === "0" || discount === "") {
    return price;
  }
  return Math.floor(+price - +price * (+discount / 100)).toString();
};