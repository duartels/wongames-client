import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Heading } from '../Heading'
import { Radio } from '../Radio'
import * as S from './styles'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
}

export const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>

        {item.fields.map((field) => {
          if (item.type === 'checkbox') {
            return (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
              />
            )
          }

          return (
            <Radio
              key={field.name}
              id={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
              value={field.name}
            />
          )
        })}
      </div>
    ))}

    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)
