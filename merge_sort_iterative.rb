require 'byebug'

class Array
  def merge_sort
    # iterative merge sort
    # sort each block of n
    sorted = self
    chunk_size = 2

    while chunk_size / 2 < sorted.length
      idx = 0
      # merge each chunk
      while idx < sorted.length do
        # take halves of the chunk
        left_chunk = sorted[idx...(idx + chunk_size / 2)]
        right_chunk = sorted[(idx + chunk_size / 2)...(idx + chunk_size)]
        # merge the chunks
        if left_chunk.empty? || right_chunk.empty?
          # it was a one-item sort
          left_chunk  ||= [] # reassign in case either half is nil
          right_chunk ||= []
          sorted_chunk = left_chunk + right_chunk
        else
          sorted_chunk = Array.merge(left_chunk, right_chunk)
        end
        # replace array at chunk with newly merged chunk
        sorted[idx...(idx + chunk_size)] = sorted_chunk
        # increment idx
        idx += chunk_size
      end

      chunk_size *= 2
    end

    return sorted
  end

  def self.merge(arrayA, arrayB)
    # guaranteed: arrayA and arrayB are sorted
    # return completely sorted array by "merging" A and B
    merged = []
    until arrayA.empty? || arrayB.empty? do
      if arrayA.first < arrayB.first
        merged << arrayA.shift
      else
        merged << arrayB.shift
      end
    end

    merged + arrayA + arrayB
  end
end
