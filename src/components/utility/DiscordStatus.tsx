"use client";
import { LanyardData, useLanyard } from "react-use-lanyard";
import { DISCORD_USER_ID } from "util/constants";

const loadingColor = "bg-blue-500";
const statusColors = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
} satisfies Record<LanyardData["discord_status"], string>;

const statusMapping = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
} satisfies Record<LanyardData["discord_status"], string>;

export default function DiscordStatus() {
  const { data, isLoading } = useLanyard({ userId: DISCORD_USER_ID });
  const status = data?.data.discord_status ?? "offline";
  const statusColor = isLoading ? loadingColor : statusColors[status];
  const statusName = isLoading ? "Loading" : statusMapping[status];

  return (
    <div className="relative grid h-3 grid-cols-[0fr] transition-all duration-500 ease-in-out hover:h-6 hover:grid-cols-[1fr]">
      <span className="z-10 mx-[0.375rem] overflow-hidden whitespace-nowrap">{statusName}</span>
      <div
        className={`absolute left-0 top-0 size-full animate-ping rounded-full transition-colors ${statusColor}`}
      />
      <div className={`absolute left-0 top-0 size-full rounded-full ${statusColor}`} />
    </div>
  );
}
