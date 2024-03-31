def running_sum(args)
  running_sum_result = Array.new(args.length)
  running_sum_result[0] = args[0]

  for i in 1..args.length-1
    running_sum_result[i] = running_sum_result[i-1] + args[i]
  end

  running_sum_result
end

pp running_sum([1, 2, 3, 4])