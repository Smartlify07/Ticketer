import Ticket from '../components/Ticket';

const TicketPage = () => {
  return (
    <main className="min-h-screen font-poppins flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-[#fff] to-[#fff]">
      <h1 className="text-2xl">Here's your ticket</h1>
      <Ticket />
    </main>
  );
};

export default TicketPage;
