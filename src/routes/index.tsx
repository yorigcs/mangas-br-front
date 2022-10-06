import { useAuth } from '../contexts/auth'
import PublicRoutes from './PublicRoutes'
import UserRoutes from './UserRoutes'
import AdminRoutes from './AdminRoutes'

const Routes = (): JSX.Element => {
  const { signed, user } = useAuth()
  if (signed && user?.isAdmin) {
    return <AdminRoutes / >
  } else if (signed) {
    return <UserRoutes / >
  }
  return <PublicRoutes / >
}

export default Routes
