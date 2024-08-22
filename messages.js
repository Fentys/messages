let randomNumber = num => {
   return Math.floor(Math.random() * num)
}

const randomWords = {
   signInfo: ['star', 'moon', 'sun', 'comet'],
   fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
   advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
 }

let message = []

for (let word in randomWords) {
   let wordIndex = randomNumber(randomWords[word].length)

   switch (word) {
      case 'signInfo':
         message.push(`Your sign right now is a "${randomWords[word][wordIndex]}".`)
         break
      case 'fortuneOutput':
         message.push(`You are having: "${randomWords[word][wordIndex]}".`)
         break
      case 'advice' :
         message.push(`You should: "${randomWords[word][wordIndex]}".`)
         break
      default:
         message.push('There is not enough info.')
   }
}

const formatMessage = text => {
   const formatted = message.join('\n')
   console.log(formatted)
}

formatMessage(message)