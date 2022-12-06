import { useAuth } from '../hooks/useAuth'
import PublicRoutes from './PublicRoutes'
import UserRoutes from './UserRoutes'
import AdminRoutes from './AdminRoutes'

const Routes = (): JSX.Element => {
  const { user } = useAuth()
  switch (user?.role) {
    case 'admin':
      return <AdminRoutes / >
    case 'user':
      return <UserRoutes / >
    default:
      return <PublicRoutes / >
  }
}

export default Routes
