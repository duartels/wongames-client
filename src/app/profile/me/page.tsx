import { FormProfile } from '@/components/FormProfile'
import { Profile } from '@/templates/Profile'

export default async function ProfileMe() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}
