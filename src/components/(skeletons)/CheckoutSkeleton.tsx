import Skeleton from './Skeleton';

const CheckoutSkeleton = () => {
  return (
    <main className="text-black py-6 self-start w-full flex items-stretch font-poppins md:gap-10 md:py-12">
      <aside className="md:w-7/12 flex flex-col pb-10 gap-6">
        <section className="flex flex-col gap-2 w-full">
          <header>
            <Skeleton className="h-6 w-1/3" />
          </header>
          <div className="rounded-md py-4 w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1 w-full">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex flex-col gap-1 w-full">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <header>
            <Skeleton className="h-6 w-1/3" />
          </header>
          <div className="flex flex-col gap-5 md:justify-between md:flex-row">
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-full h-12" />
          </div>
        </section>

        <Skeleton className="w-full h-12 mt-auto" />
      </aside>

      <aside className="w-full py-10 px-6 flex flex-col gap-6 rounded-xl bg-blue-900 bg-opacity-5 md:w-5/12">
        <header className="flex flex-col gap-6 py-10">
          <Skeleton className="h-6 w-1/3 self-center" />
          <Skeleton className="h-10 w-1/2 self-center" />
          <Skeleton className="h-4 w-1/3 self-center" />
        </header>
        <section className="flex flex-col w-full font-poppins gap-8">
          <header>
            <Skeleton className="h-6 w-1/3" />
          </header>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Skeleton className="rounded-md w-10 h-10" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-6 w-1/4" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between w-full">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-6 w-1/4" />
            </div>

            <div className="flex items-center justify-between w-full">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-6 w-1/4" />
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-6 w-1/4" />
          </div>
        </section>
      </aside>
    </main>
  );
};

export default CheckoutSkeleton;
