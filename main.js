let str=`
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abcccdddd
hxyp
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`
// README.md 문서 참조

// const 재할당 불가능
// let 재할당 가능, ex) str = str.replace(regexp, 'AAA')

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)
// str = str.replace(regexp, 'AAA')
// console.log(str)

// console.log(str.match(/\.$/gim))

const h = ` the hello world  !

`

console.log(
  // str.match(/d$/gm)
  // str.match(/^t/gim)
  // str.match(/h..p/gm)
  // str.match(/fox|dog/)
  // str.match(/https?/g)
  // str.match(/\b\w{2,3}\b/g)
)
console.log(
  // str.match(/[fox]/g)
  // str.match(/[0-9]{1,}/g)
  // str.match(/[가-힣]{1,}/g)
)
console.log(
  // str.match(/\bf\w{1,}\b/g)
  // str.match(/\d{1,}/g)
  // h.replace(/\s/g, '')
)
console.log(
  // str.match(/.{1,}(?=\@)/g)
  str.match(/(?<=\@).{1,}/g)
)