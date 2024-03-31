def fizz_buzz(n)
  result = []

  divisible_by_3 = Proc.new do |val|
    val % 3 == 0
  end

  divisible_by_5 = Proc.new do |val|
    val % 5  == 0
  end

  (1..n).each { |i|
    str = ''

    if divisible_by_3.call(i)
      str += 'Fizz'
    end

    if divisible_by_5.call(i)
      str += 'Buzz'
    end

    if str.empty?
      str = i.to_s
    end

    result << str
  }

  result
end

pp fizz_buzz(15)