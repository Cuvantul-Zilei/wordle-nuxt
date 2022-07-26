const defaultMessage = 'Using word of the day instead.'

export function getDay(): number {
  const now = new Date()
  const start = new Date(2022, 0, 30)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }

  return day
}

// copied from https://github.com/yyx990803/vue-wordle/blob/main/src/words.ts
export function getWordOfTheDay(): string {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`)
      } else {
        return query
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`)
    }
  }

  const day = getDay()

  return answers[day]
}

export function isValidWord(word: string): boolean {
  const normalizedWord = word.toLowerCase()
  return answers.includes(normalizedWord) || validWords.includes(normalizedWord)
}

// todo: add more correct RO answers
const answers: Array<string> = [
  'baiet',
  'rebut',
  'amant',
]


// todo: add more valid RO words
// https://www.listedecuvinte.com/cuvinte5litere.htm
const validWords: Array<string> = [
  'abaca', 'abace', 'abale', 'abata', 'abate', 'abati', 'abatu', 'abaua', 'abces', 'abdic', 'abila', 'abile', 'abili', 'abjur', 'abneg', 'aboli', 'abona', 'abrac', 'abras', 'abrog', 'abtie', 'abtii', 'abtin', 'abtiu', 'aburc', 'aburi', 'abuza', 'acaju', 'acana', 'acani', 'acant', 'acare', 'acari', 'acasa', 'acata', 'acate', 'acati', 'acced', 'acces', 'acciz', 'aceea', 'aceia', 'acela', 'acele', 'acera',
]

