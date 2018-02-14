def taxicab(n)
  # method to compute the nth taxicab number
  # the nth taxicab number is the smallest number
  # which can be expressed as the sum of 2 positive cube numbers
  # in n distinct configurations

  # strategy
  # let one cube be the upper bound. call it i
  # let one cube iterate from 1 to i. call it j
  # when j reaches i, i increments by 1.

  # each pair is cubed, summed and hashed to its number of occurrences.
  # when the hash value reaches n, the taxicab number has been found.

  i, j = 1, 1
  sum_counts = Hash.new(0)

  while (true)
    sum = i**3 + j**3
    sum_counts[sum] += 1

    return sum if sum_counts[sum] == n

    # increment cube roots
    if j == i
      i += 1
      j = 1
    else
      j += 1
    end
  end
end
