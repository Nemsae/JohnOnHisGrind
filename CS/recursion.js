function canBeZero(i) {
  if (i !== 0 && i < 6) return false
  console.log('i: ', i);
  if (!i%6||!i%9||!i%20||!i%15||!i%26||!i%29||!i%35) return true

  return canBeZero(i - 6) || canBeZero2(i - 9) || canBeZero3(i - 20)
}

function canBeZero2 (i) {
  console.log('i of 2: ', i);
  if (i === 3) console.log('HIT')
}

function canBeZero3 (i) {
  console.log('i of 3: ', i);
}

console.log(canBeZero(12))
console.log(canBeZero(13))
