// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数。

function Find(target, array) {
  var rows = array.length,
    cols = array[0].length,
    i = rows - 1,
    j = 0;

  while (i >= 0 && j < cols) {
    if (target < array[i][j]) i--;
    else if (target > array[i][j]) j++;
    else return true;
  }
  return false;
}
