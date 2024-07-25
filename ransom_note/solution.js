function isRansomNotePossible(magazine, ransomNote) {
  const magazineWords = magazine.split('');
  const ransomNoteWords = ransomNote.split('');

  const magazineWordCount = magazineWords.reduce((acc, word) => {
    acc[word] = acc[word] ? acc[word] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < ransomNoteWords.length; i++) {
    if (!magazineWordCount[ransomNoteWords[i]] || magazineWordCount[ransomNoteWords[i]] === 0) {
      return false;
    }
    magazineWordCount[ransomNoteWords[i]]--;
  }

  return true;
}

console.log(isRansomNotePossible('hello world', 'hellop')); // true