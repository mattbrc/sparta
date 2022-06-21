import { Maybe } from '@generated/types'

type Attribute = {
  traitType: string
  value: string
}

type Query = 'quotePubId'

const getPublicationAttribute = (
  attributes: Maybe<Attribute[]> | undefined | any,
  query: Query
): string | undefined => {
  return attributes?.find((o: any) => o.traitType === query)?.value
}

export default getPublicationAttribute
