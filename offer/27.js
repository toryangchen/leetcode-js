// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

// 递归排列
function Permutation(str) {
  // write code here
  let res = [];
  if (str.length <= 0) {
    return res;
  }

  let arr = str.split("");
  res = helper(arr, 0, res);
  res = [...new Set(res)];
  res.sort();
  return res;
}

function helper(arr, index, res) {
  if (arr.length == index) {
    let s = "";
    for (let i = 0; i < arr.length; i++) {
      s += arr[i];
    }
    return res.push(s);
  } else {
    for (let i = index; i < arr.length; i++) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      helper(arr, index + 1, res);
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }
  return res;
}

// 回溯法
function Permutation_1(str) {
  // write code here
  let res = [],
    pstr = "";
  if (str.length <= 0) {
    return res;
  }
  arr = str.split("");
  res = helper_1(arr, pstr, res);
  return res;
}

function helper_1(arr, pStr, res) {
  if (arr.length === 0) {
    return res.push(pStr);
  } else {
    let isRepeated = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (!isRepeated.has(arr[i])) {
        let char = arr.splice(i, 1)[0];
        pStr += char;
        helper_1(arr, pStr, res);
        arr.splice(i, 0, char);
        pStr = pStr.slice(0, pStr.length - 1);
        isRepeated.add(char);
      }
    }
  }

  return res;
}
