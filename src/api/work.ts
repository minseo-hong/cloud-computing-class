export const getWorkList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}/works`);

  if (!res.ok) {
    throw new Error('Failed to fetch work list');
  }

  return res.json();
};
