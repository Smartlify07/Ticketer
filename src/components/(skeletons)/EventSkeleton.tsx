import Skeleton from '../(skeletons)/Skeleton';

export default function EventSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Skeleton className="h-[300px] w-full rounded-lg" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-[300px]" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-2">
        <Skeleton className="h-8 w-[200px]" />
      </div>
    </div>
  );
}
