def is_ransom_note_possible(magazine, ransom_note)
  magazine_words = magazine.split('')
  ransom_note_words = ransom_note.split('')

  magazine_words_count = magazine_words.inject ({}) do |acc, char|
    acc[char] = acc[char] ? acc[char] + 1 : 1
    acc
  end

  ransom_note_words.each_with_index do |_, index|
    if !magazine_words_count[ransom_note_words[index]] || magazine_words_count[ransom_note_words[index]].to_i == 0
      return false
    else
      magazine_words_count[ransom_note_words[index]] -= 1
    end
  end

  true
end

pp is_ransom_note_possible('a', 'b') # false
pp is_ransom_note_possible('helloworld', 'hello') # true