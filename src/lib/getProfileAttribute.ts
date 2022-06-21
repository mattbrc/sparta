import { Maybe } from '@generated/types'

type Attribute = {
  key: string
  value: string
}

type Query =
  | 'isBeta'
  | 'hasPrideLogo'
  | 'app'
  | 'twitter'
  | 'location'
  | 'website'

const getProfileAttribute = (
  attributes: Maybe<Attribute[]> | undefined,
  query: Query
): string | undefined => {
  return attributes?.find((o) => o.key === query)?.value
}

export default getProfileAttribute
