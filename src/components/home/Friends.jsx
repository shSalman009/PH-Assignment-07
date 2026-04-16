import Image from "next/image";
import Link from "next/link";
import React from "react";

const statusColor = {
  overdue: "bg-red-500",
  "almost due": "bg-yellow-500",
  "on-track": "bg-emerald-900",
};

export default async function Friends() {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  return (
    <div>
      <h4 className="text-2xl font-semibold mb-2">Your Friends</h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
        {friends.map((friend) => (
          <Link
            href={`/friend/${friend.id}`}
            key={friend.id}
            className="bg-base-100 shadow rounded-md p-6 flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={friend.picture}
              alt={friend.name}
              width={80}
              height={80}
              className="rounded-full"
            />

            <h4 className="text-xl font-semibold">{friend.name}</h4>
            <p className="text-gray-500 text-sm">
              {friend.days_since_contact}d ago
            </p>

            <div className="flex gap-1 flex-wrap">
              {friend.tags.map((tag, id) => (
                <p
                  key={id}
                  className="rounded-full px-2 py-1 text-xs font-medium bg-emerald-200 text-emerald-900 uppercase"
                >
                  {tag}
                </p>
              ))}
            </div>

            <p
              className={`rounded-full px-2 py-1 text-xs font-medium capitalize text-white ${statusColor[friend.status]}`}
            >
              {friend.status}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
