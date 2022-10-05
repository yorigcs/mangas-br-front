import { useAuth } from '../contexts/auth'
import PublicRoutes from './PublicRoutes'
import UserRoutes from './UserRoutes'

const Routes = (): JSX.Element => {
  const { signed } = useAuth()
  return signed ? <UserRoutes /> : <PublicRoutes />
}

export default Routes
