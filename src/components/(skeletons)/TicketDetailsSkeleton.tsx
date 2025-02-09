import Skeleton from './Skeleton';

const TicketDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 w-[320px] md:w-[450px]">
      <div className="rounded-3xl border flex flex-col gap-6 py-7 w-full relative">
        <div className="flex items-center justify-between px-6 w-full">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-6 w-20 mt-2" />
          </div>
          <Skeleton className="rounded-full w-10 h-10" />
        </div>
        <div className="px-6 flex flex-col w-full gap-6">
          <Skeleton className="h-10 w-3/4 self-center" />
          <hr className="w-full" />
          <div className="flex items-center gap-6 w-full justify-center">
            <div className="flex flex-col items-center gap-0.5">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white border-r border-neutral-700 rounded-full absolute top-0 -left-5 w-10 h-10"></div>
          <div className="bg-white border-l border-neutral-700 rounded-full absolute top-0 -right-5 w-10 h-10"></div>
          <div className="flex items-center mt-5 gap-1">
            {[...Array(20)].map((_, index) => (
              <Skeleton key={index} className="w-[40px] h-[1px]" />
            ))}
          </div>
        </div>
        <div className="flex items-start justify-center mt-4 w-full gap-1">
          <Skeleton className="w-64 h-64" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default TicketDetailsSkeleton;
