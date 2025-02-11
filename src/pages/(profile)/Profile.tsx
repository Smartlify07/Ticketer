import PersonalInformation from '../../components/(profile)/PersonalInformation';
import ProfileTop from '../../components/(profile)/ProfileTop';
import ProfileSkeleton from '../../components/(skeletons)/ProfileSkeleton';
import { useProfile } from '../../hooks/useProfile';

const Profile = () => {
  const { profile, loading, error, updateProfile } = useProfile();
  return (
    <main className="flex flex-col gap-5 px-4 md:px-0 font-poppins py-10 items-center ">
      <div className="flex flex-col w-full lg:w-9/12 max-w-[1440px] items-center">
        <header className="self-start mb-10 flex flex-col gap-1">
          <h1 className="text-neutral-800 text-lg md:text-xl font-medium">
            My profile
          </h1>
          <p className="text-sm text-neutral-500">
            View and edit your profile details
          </p>
        </header>
        {!loading && profile && !error && (
          <>
            <ProfileTop
              name={profile?.name ?? ''}
              email={profile?.email ?? ''}
            />
            <PersonalInformation
              name={profile?.name ?? ''}
              email={profile?.email ?? ''}
              matricNumber=""
              phone={profile?.phone ?? ''}
              updateProfile={updateProfile}
            />
          </>
        )}

        {loading && !profile && <ProfileSkeleton />}
        {error && (
          <section className="min-h-[400px] flex items-center justify-center">
            {error}
          </section>
        )}
      </div>
    </main>
  );
};

export default Profile;
