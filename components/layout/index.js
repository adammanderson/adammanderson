import { Layout, LayoutContent } from './styles'
import Header from '../header'

export default ({ children }) => (
  <Layout>
    <Header />
    <LayoutContent>
      { children }
    </LayoutContent>
  </Layout>
)
