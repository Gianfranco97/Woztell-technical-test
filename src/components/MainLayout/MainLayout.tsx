import { Layout } from 'antd';
import "./MainLayout.scss"

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function MainLayout({ children }: DashboardLayoutProps) {
  return (
    <Layout className="layout">
      <Layout.Header className="layout__header"><h1>Technical test - Woztell</h1></Layout.Header>

      <Layout>
        <Layout.Content className="layout__main">{children}</Layout.Content>
      </Layout>

      <Layout.Footer className="layout__footer">© 2022 - Gianfranco Manganiello</Layout.Footer>
    </Layout>
  )
}