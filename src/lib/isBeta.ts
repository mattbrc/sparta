import { Profile } from '@generated/types'

import getProfileAttribute from './getProfileAttribute'

const isBeta = (profile: Profile): boolean =>
  getProfileAttribute(profile?.attributes, 'isBeta') === 'true'

export default isBeta
