import { cn } from '../../utils/utils';

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-100', className!)}
      {...props}
    ></div>
  );
};

export default Skeleton;
