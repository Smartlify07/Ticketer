import Skeleton from './Skeleton';

const ProfileSkeleton = () => {
  return (
    <main className="flex flex-col w-full gap-5 px-4 md:px-0 font-poppins py-10 items-center ">
      <section className="flex items-center w-full border px-4 py-4 rounded-xl">
        <div className="flex items-center gap-4">
          <Skeleton className="rounded-full flex items-center justify-center bg-neutral-100 w-16 h-16 md:w-20 md:h-20"></Skeleton>

          <div className="flex flex-col gap-0">
            <div className="flex flex-col">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32 mt-1" />
            </div>
          </div>
        </div>
      </section>
      <div className="rounded-md self-start w-full flex flex-col gap-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-1 w-full md:w-6/12">
            <div className="text-neutral-500 text-sm">
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="flex flex-col gap-1 w-full md:w-6/12">
            <div className="text-neutral-500 text-sm">
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-1 w-full md:w-6/12">
            <div className="text-neutral-500 text-sm">
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="flex flex-col gap-1 w-full md:w-6/12">
            <div className="text-neutral-500 text-sm">
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        <Skeleton className="rounded-md shadow-sm text-white font-medium text-sm py-2.5 mt-10 px-4 h-10 w-full" />
      </div>
    </main>
  );
};

export default ProfileSkeleton;
