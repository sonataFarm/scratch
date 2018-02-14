class String
  def zero_pad(digits)
    # prepend a string with zeros resulting in string of <digits> digits
    num_zeros = digits - self.length
    '0' * num_zeros + self
  end
end

class Timestamp
  def self.random(min_hour, max_hour)
    self.new(
      hours: rand(min_hour..max_hour),
      minutes: rand(0..59),
      seconds: rand(0..59)
    )
  end

  attr_reader :hours, :minutes, :seconds

  def initialize(values)
    @hours = values[:hours] || 0
    @minutes = values[:minutes] || 0
    @seconds = values[:seconds] || 0
  end

  def to_s
    # string is HH:MM:SS
    printables = [hours, minutes, seconds].map do |time_val|
      time_val.to_s.zero_pad(2)
    end
    printables.join(':')
  end
end
