# Write a recursive method that returns all of the permutations of an array
def permutations(array)
  return [array] if array.length < 2

  set = []
  array.length.times do
    set += permutations(array[1..-1]).map { |perm| [array[0]] + perm }
    array.rotate!
  end

  set
end


# Write a method that capitalizes each word in a string like a book title
# Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'
def titleize(title)
  # split title into words

  little_words = %w[a and of over the]

  words = title.split.map.with_index do |word, idx|
    if !little_words.include?(word.downcase) || idx == 0
      word.capitalize
    else
      word.downcase
    end
  end

  words.join(' ')
end

class Array

  def my_all?(&prc)
    self.each do |el|
      return false unless prc.call(el)
    end

    true
  end

end

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    # base case: array < 2 elements (already sorted)
    return self if self.length < 2

    mid = self.length / 2
    left = self[0...mid].merge_sort(&prc)
    right = self[mid..-1].merge_sort(&prc)

    Array.merge(left, right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      merged << (prc.call(left, right) < 0 ? left.shift : right.shift)
    end

    merged + left + right
  end
end
