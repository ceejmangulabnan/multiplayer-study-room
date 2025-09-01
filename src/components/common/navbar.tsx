import { createClient } from '@/utils/supabase/server'
import NavbarContent from '@/components/common/navbar-content'

const Navbar = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <NavbarContent user={user} />
  )
}

export default Navbar
