import Skeleton from './Skeleton';

const EventDetailsSkeleton = () => {
  return (
    <div className="flex flex-col w-full md:flex-row md:gap-10 xl:max-w-[1440px]">
      <Skeleton className="w-full h-full md:w-7/12 md:h-[400px] bg-neutral-50 rounded-2xl" />

      <section className="flex flex-col w-full gap-4 py-6 md:w-5/12">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-3/4 h-8 bg-neutral-50 rounded-md" />
        </div>

        <div className="flex items-center gap-x-6 gap-y-2 flex-wrap md:flex-nowrap">
          <Skeleton className="w-1/3 h-6 bg-neutral-50 rounded-md" />
          <Skeleton className="w-1/3 h-6 bg-neutral-50 rounded-md" />
          <Skeleton className="w-1/3 h-6 bg-neutral-50 rounded-md" />
        </div>

        <div className="flex flex-col gap-4 mt-6 md:gap-2">
          <Skeleton className="w-1/2 h-6 bg-neutral-50 rounded-md" />
          <Skeleton className="w-full h-24 bg-neutral-50 rounded-md" />
        </div>

        <Skeleton className="w-1/4 h-6 bg-neutral-50 rounded-md" />

        <Skeleton className="w-full h-12 bg-neutral-50 rounded-md mt-10 md:mt-auto" />
      </section>
    </div>
  );
};

export default EventDetailsSkeleton;
