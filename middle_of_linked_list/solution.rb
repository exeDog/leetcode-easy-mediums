class Node
  attr_accessor :next, :value
end

class LinkedList
  attr_accessor :head

  def initialize(number_of_nodes)
    number_of_nodes.times do
      random_value = rand(10)
      add(random_value)
    end
  end

  def add(value)
    new_node = Node.new
    new_node.value = value

    if @head
      current = @head

      while current.next
        current = current.next
      end

      current.next = new_node
    else
      @head = new_node
    end
  end
end

def print_middle(linked_list)
  values = []

  current = linked_list.head

  while current
    values << current.value
    current = current.next
  end

  values[(values.size / 2).floor]
end

def print_middle_version_two(linked_list)
  middle_pointer, end_pointer = linked_list.head, linked_list.head

  while end_pointer&.next
    middle_pointer =  middle_pointer.next
    end_pointer = end_pointer.next.next
  end

  middle_pointer.value

end

ll = LinkedList.new(5)

pp print_middle ll
pp print_middle_version_two ll