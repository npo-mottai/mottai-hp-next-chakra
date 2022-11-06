type Props = {
  value: string
  selected: boolean
}

export default function CategoryOption(prop: Props) {
  return (
    <option value={prop.value} selected={prop.selected}>
      {prop.value}
    </option>
  )
}
