import { Meta } from '@/components/v2';
import { NyfashionweekPage } from '@/modules/nyfashionweek/NyfashionweekPage';
import { NyfashionweekContextProvider } from '@/modules/nyfashionweek/context';

const NyfashionweekPageWrapper: React.FC = () => {
  return (
    <>
      <Meta />
      <NyfashionweekContextProvider>
        <NyfashionweekPage />
      </NyfashionweekContextProvider>
    </>
  );
};

export default NyfashionweekPageWrapper;
