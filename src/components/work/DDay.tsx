'use client';

interface DDayProps {
  year: number;
  month: number;
  day: number;
}

const DDay = ({ year, month, day }: DDayProps) => {
  const today = new Date();
  const targetDate = new Date(year, month - 1, day);
  const diff = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return (
    <h1 className="text-center font-clash-display text-[5rem] font-semibold">
      D-{diffDays}
    </h1>
  );
};

export default DDay;
