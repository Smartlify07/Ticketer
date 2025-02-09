import Skeleton from './Skeleton';

const TicketsPageSkeleton = () => {
  return (
    <div className="grid w-full gap-5 md:grid-cols-3 md:gap-8 ">
      {[1, 2, 3, 4, 5].map((ticket) => (
        <Skeleton
          key={ticket}
          className="rounded-2xl bg-white animate-pulse flex flex-col gap-4 border py-4"
        >
          <div className="flex items-center gap-2 px-5">
            <Skeleton className="rounded-full bg-gray-300 w-10 h-10"></Skeleton>
            <div className="flex flex-col gap-0.5">
              <Skeleton className="h-4 rounded w-24"></Skeleton>
              <Skeleton className="h-3 rounded w-16"></Skeleton>
            </div>
          </div>
          <div className="w-full border border-dashed"></div>
          <div className="flex flex-col px-5 gap-4 w-full">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 rounded w-32"></Skeleton>
              <Skeleton className="h-4 rounded w-24"></Skeleton>
              <Skeleton className="h-4 rounded w-20"></Skeleton>
              <Skeleton className="h-4 rounded w-16 self-end"></Skeleton>
            </div>
          </div>
        </Skeleton>
      ))}
    </div>
  );
};

export default TicketsPageSkeleton;
