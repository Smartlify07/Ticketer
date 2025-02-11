type ProfileTopProps = {
  name: string;
  email: string;
};
const ProfileTop = ({ name, email }: ProfileTopProps) => {
  return (
    <section className="flex items-center w-full border px-4 py-4 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="rounded-full flex items-center justify-center bg-neutral-100 w-16 h-16 md:w-20 md:h-20">
          <h1 className="text-neutral-800 md:text-2xl font-medium">
            {name.charAt(0).toUpperCase()}
          </h1>
        </div>

        <div className="flex flex-col gap-0">
          <div className="flex flex-col">
            <h1 className="text-neutral-800 text-base font-medium">{name}</h1>
            <h3 className="text-sm text-neutral-600">{email}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTop;
