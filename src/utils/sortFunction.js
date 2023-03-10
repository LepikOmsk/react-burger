export const sortFunction = (arr, dragIndex, hoverIndex) => {
  const newArr = [...arr];
  const item = arr[dragIndex];

  newArr.splice(dragIndex, 1);
  newArr.splice(hoverIndex, 0, item);

  return newArr;
};
