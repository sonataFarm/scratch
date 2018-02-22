# Write a recursive method that returns the sum of all elements in an array
def rec_sum(nums)
  if nums.empty?
    0
  else
    nums.first + rec_sum(nums[1..-1])
  end
end

class Array

  def my_reverse
    return self if self.length < 2

    [self[-1]] + self[0...-1].my_reverse
  end
end

class Array
  def two_sum
    pairs = []

    self[0...-1].each_with_index do |el1, idx1|
      (idx1 + 1).upto(self.length - 1) do |idx2|
        el2 = self[idx2]
        pairs << [idx1, idx2] if el1 + el2 == 0
      end
    end
    pairs
  end
end

# Write a method that translates a sentence into pig latin. You may want a helper method.
# 'apple' => 'appleay'
# 'pearl' => 'earlpay'
# 'quick' => 'ickquay'
def pig_latinify(sentence)
end

class String
  # Returns an array of all the subwords of the string that appear in the
  # dictionary argument. The method does NOT return any duplicates.

  def real_words_in_string(dictionary)
    substrings.select { |substr| dictionary.include?(substr) }
  end

  def substrings
    substrings = []

    1.upto(self.length) do |len|
      self.chars.each_cons(len) do |letters|
        substrings << letters.join
      end
    end

    substrings.uniq
  end
end

class Array

  def my_any?(&prc)
    self.each do |el|
      return true if prc.call(el)
    end
    false
  end
end

class Array

  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(accumulator = nil)
    to_inject = self

    if !accumulator
      accumulator = self[0]
      to_inject = self[1..-1]
    end

    to_inject.each do |el|
      accumulator = yield(accumulator, el)
    end

    accumulator
  end
end

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(&prc)
    prc ||= Proc.new { |a, b| a <=> b }

    return self if self.length < 2

    mid = self.length / 2

    left = self[0...mid].merge_sort(&prc)
    right = self[mid..-1].merge_sort(&prc)

    # merge halves and return
    Array.merge(left, right, &prc)
  end

  private

  def self.merge(left, right, &prc)
    # guaranteed: left, right are sorted
    merged = []

    until left.empty? || right.empty?
      if prc.call(left.first, right.first) < 0
        merged << left.shift
      else
        merged << right.shift
      end
    end

    merged + left + right
  end
end
