def calculate_number_of_steps(number)
  total_steps = 0

  while number > 0
    if number % 2 == 0
      number /= 2
    else
      number -= 1
    end

    total_steps += 1
  end

  total_steps
end

pp calculate_number_of_steps 10