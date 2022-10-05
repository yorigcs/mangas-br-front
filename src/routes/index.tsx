import { useAuth } from '../contexts/auth'
import PublicRoutes from './publicRoutes'
import UserRoutes from './userRoutes'

const Routes = (): JSX.Element => {
  const { signed } = useAuth()
  return signed ? <UserRoutes /> : <PublicRoutes />
}

export default Routes
