type Option = {
  value: string
}

export default function CategoryOption(option: Option) {
  return (
    <option value={option.value} key={option.value}>
      {option.value}
    </option>
  )
}
