import { Result, Button } from 'antd';
import MainLayout from 'components/MainLayout';
import { Link } from 'react-router-dom';

function MissingPage() {
  return (
    <MainLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={(
          <Button type="primary">
            <Link to="/">Back to home</Link>
          </Button>
        )}
      />
    </MainLayout>
  );
}

export default MissingPage;
