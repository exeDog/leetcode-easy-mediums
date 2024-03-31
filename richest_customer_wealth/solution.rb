def richest_customer_wealth(args)
  max_wealth = 0

  args.each_with_index do |customer, index|
    total_customer_wealth = customer.sum

    if total_customer_wealth > max_wealth
      max_wealth = total_customer_wealth
    end
  end

  max_wealth
end

pp richest_customer_wealth([[7,1,3], [2,8,7], [1,9,5]])