
const { readFile, writeFile } = require('fs')

const firstTextAsync = readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err)
    } else {
      const firstText = res
      readFile( './content/second.txt', 'utf8', (err, res) => {
        if (err) {
          console.log(err)
        } else {
          const secondText = res
          writeFile('./content/asyncthird.txt', `texts from first.txt and second.txt: ${firstText},  ${secondText}`, (err, res) => {
            if (err) {
              console.log(err)
            } else {
              console.log('file written')
            }
          })
        }
      })
    }
  })



const moduleFn = (  ) => {
  console.log(firstTextAsync)
}



module.exports = moduleFn;