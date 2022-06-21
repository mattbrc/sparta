import { Profile } from '@generated/types'

import getProfileAttribute from './getProfileAttribute'

const hasPrideLogo = (profile: Profile): boolean =>
  getProfileAttribute(profile?.attributes, 'hasPrideLogo') === 'true'

export default hasPrideLogo
