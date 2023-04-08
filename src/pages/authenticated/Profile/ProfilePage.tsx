import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import TextDivider from '../../../components/TextDivider';
import AssetGrid from '../../../components/TokenGrid';
import { useGetMyAssetsQuery } from '../../../graphql/generated/hooks';
import ProfileSettings from './ProfileSettings';

const ProfilePage = () => {
  const { data, loading, error } = useGetMyAssetsQuery();

  if (error) return <ErrorMessage error={error} />;
  if (loading || !data) return <Loading />;

  if (!data.getMyAssets.length)
    return <div className="text-white text-lg w-full h-full flex justify-center items-center">No results</div>;

  return (
    <div className="p-12 w-full flex flex-col overflow-y-scroll">
      <span className="text-[32px] font-medium">Profile</span>
      <TextDivider title="Settings" className="mt-10" />
      <ProfileSettings />
      <TextDivider title="Owned NFTs" className="mt-10" />
      <AssetGrid assets={data.getMyAssets} />
    </div>
  );
};

export default ProfilePage;
