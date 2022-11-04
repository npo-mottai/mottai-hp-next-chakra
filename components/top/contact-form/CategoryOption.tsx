type Props = {
  value: string
  label: string
  disabled: boolean
  selected: boolean
}

export default function CategoryOption(prop: Props) {
  return (
    <option
      value={prop.value}
      disabled={prop.disabled}
      selected={prop.selected}
    >
      {prop.label}
    </option>
  )
}
