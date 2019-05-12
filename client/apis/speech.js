import request from 'superagent'

export function transcribeSpeech (fileName) {
    return request
    .post('/api/speech/transcribe')
    .send({fileName: fileName})
    .then(res => {
        return res.body['transcript']
    })
}

export function sendBlob (blob) {
    return request
    .post('/api/speech/blob')
    .send({blob: blob})
    .then(() => {})
    // .then(res => res.body['transcript'])
}

export function checkSpelling (word, spelling) {
    let score = []

    let spellingArr = spelling.split("").filter(char => {
        return char != " "
    })
  
    for (var i = 0; i < word.length; i++) {

        if(spellingArr[i] == word.charAt(i)){
            score.push(word.charAt(i))
        } else {
            score.push('X')
            return score
        }
    }

    if(spellingArr.length != word.length){
        score.push('X')
        return score
    } else {
        score.push('✓')
        return score
    }
}
