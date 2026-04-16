import FriendDetails from "@/components/friendDetails/FriendDetails";

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();

  const friend = data.find((f) => f.id == id);

  return <FriendDetails friend={friend} />;
}
