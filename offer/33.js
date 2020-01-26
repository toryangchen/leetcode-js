// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

function GetUglyNumber_Solution(index) {
  // write code here
  if (index <= 0) {
    return 0;
  }
  let list = [1];
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  while (list.length < index) {
    let m2 = list[i2] * 2;
    let m3 = list[i3] * 3;
    let m5 = list[i5] * 5;
    let min = Math.min(m2, Math.min(m3, m5));
    list.push(min);
    if (min === m2) i2++;
    if (min === m3) i3++;
    if (min === m5) i5++;
  }

  return list.pop();
}

console.log(GetUglyNumber_Solution(2));
