/**
 * 数组插入函数
 * @param arr 数组
 * @param val 插入值
 * @param compare 比较函数,传入,判断是否存在插入值
 * @param maxLen 最大插入个数,不传即为max
 */
export function insertArray (arr, val, compare, maxLen) {
  const index = arr.findIndex(compare);
  // 如果当前插入的值就在第一个位置则啥都不做
  if (index === 0) {
    return;
  }
  // 如果数组中有这条数据则删除这个
  if (index > 0) {
    arr.splice(index, 1);
  }
  arr.unshift(val);// 插入数据
  if (maxLen && arr.length > maxLen) {
    arr.pop();// 如果数组超出，则把最后一个给推出
  }
}

/**
 *  删除数据
 * @param arr 数组
 * @param compare 比较函数,传入,判断是否存在插入值
 */
export function deleteFromArray (arr, compare) {
  const index = arr.findIndex(compare);
  // 如果数组中有这条数据则删除这个
  if (index > -1) {
    arr.splice(index, 1);
  }
}

/**
 * 节流函数，延迟执行函数
 * @param func 延迟的函数类型
 * @param delay 延迟毫秒数
 * @return {Function} 返回一个执行函数
 */
export function debounce (func, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 洗牌函数
 * @param arr 需要洗牌的数组
 * @return {打乱次序的新数组}
 */
export function shuffle (arr) {
  let newArr = arr.slice();// 复制一个新数组
  for (let i = 0; i < newArr.length; i++) {
    let j = getRandomInt(0, i);// 在0-当前循环的位置随机一个位置做交换
    let t = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = t;
  }
  return newArr;
}

/**
 * 在某个区间随机一个整数
 * @param min 最小值
 * @param max 最大值
 * @return {number}
 */
export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
