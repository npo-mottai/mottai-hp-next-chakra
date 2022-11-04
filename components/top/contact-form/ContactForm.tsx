import { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import PrimaryButton from '../../buttons/PrimaryButton'
import CategoryOption from './CategoryOption'

export default function ContactForm() {
  const actionUrl =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5DkYy22ThllQGH6AW6unb2NwJqKvytKcK7CGMkzF036UBIA/formResponse'
  const [value, setValue] = useState('')
  const categoryOptions = []
  for (const item of categoryOptionItems) {
    categoryOptions.push(
      <CategoryOption
        value={item.value}
        label={item.label}
        disabled={item.disabled}
        selected={value === item.value}
      />
    )
  }
  return (
    <Box>
      <form action={actionUrl}>
        <Box>
          <label htmlFor="selectCategory">種別【必須】</label>
          <select
            id="selectCategory"
            name="entry.725826341"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            required
          >
            {categoryOptions}
          </select>
        </Box>
        <Box>
          <Box>
            <label htmlFor="inputLastName">姓【必須】</label>
            <input
              id="inputLastName"
              name="entry.896613129"
              type="text"
              placeholder="山田"
              required
            />
          </Box>
          <Box>
            <label htmlFor="inputFirstName">名【必須】</label>
            <input
              id="inputFirstName"
              name="entry.1420828012"
              type="text"
              placeholder="太郎"
              required
            />
          </Box>
        </Box>
        <Box>
          <label htmlFor="inputCompany">会社名など【任意】</label>
          <input
            id="inputCompany"
            name="entry.1666260960"
            type="text"
            placeholder="株式会社 XXX"
          />
        </Box>
        <Box>
          <label htmlFor="inputTel">電話番号【必須】</label>
          <input
            id="inputTel"
            name="entry.2019384655"
            type="text"
            placeholder="012-3456-7890"
            required
          />
        </Box>
        <Box>
          <label htmlFor="inputEmail">Eメール【必須】</label>
          <input
            id="inputEmail"
            name="entry.653387606"
            type="text"
            placeholder="npo-mottai@example.com"
            required
          />
        </Box>
        <Box>
          <label htmlFor="inputTitle">件名【必須】</label>
          <input
            id="inputTitle"
            name="entry.627760766"
            type="text"
            placeholder="XXX について"
            required
          />
        </Box>
        <Box>
          <label htmlFor="inputContent">本文【必須】</label>
          <textarea
            id="inputContent"
            name="entry.152237501"
            placeholder="本文を入力"
            rows={10}
            required
          />
        </Box>
        <Box>
          <PrimaryButton text="送信する" />
          <Text pt={1}>※ 送信後Google Formsの完了画面に遷移します</Text>
        </Box>
      </form>
    </Box>
  )
}

const categoryOptionItems = [
  { value: '', label: '種別を選択してください', disabled: true },
  { value: '各種活動について', label: '各種活動について', disabled: false },
  { value: '会員登録について', label: '会員登録について', disabled: false },
  { value: '寄付について', label: '寄付について', disabled: false },
  {
    value: 'プロボノやインターンについて',
    label: 'プロボノやインターンについて',
    disabled: false,
  },
  { value: '講演依頼', label: '講演依頼', disabled: false },
  { value: '取材依頼', label: '取材依頼', disabled: false },
  { value: 'その他', label: 'その他', disabled: false },
]
