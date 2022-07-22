import { Spin } from 'antd';
import MainLayout from 'components/MainLayout';
import "./LoadingFullPage.scss"

export default function LoadingFullPage() {
  return (
    <MainLayout>
      <div className='loading-container'>
        <Spin size="large" />
      </div>
    </MainLayout>
  )
}