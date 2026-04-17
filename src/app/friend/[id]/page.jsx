import FriendDetails from "@/components/friendDetails/FriendDetails";

export default async function FriendDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch("https://keen-keeper-mocha.vercel.app/friends.json");
  const data = await res.json();

  const friend = data.find((f) => f.id == id);

  if (friend) {
    return <FriendDetails friend={friend} />;
  } else {
    return (
      <p className="text-center text-gray-500 text-xl font-medium py-12">
        Data Not Found
      </p>
    );
  }
}
