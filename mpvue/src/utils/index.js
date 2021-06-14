function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function getTodayDate (d) {
  let date = d ? new Date(d) : new Date()
  return {
    year: date.getFullYear(),
    month: addZero(date.getMonth() + 1),
    day: addZero(date.getDate())
  }
}

function addZero (num){
  if (isNaN(num)) return
  if (parseInt(num) < 10 && parseInt(num) > 0) {
    return '0' + num;
  } else {
    return num
  }
}


export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime,
  getTodayDate,
  // getSystemInfo
}
