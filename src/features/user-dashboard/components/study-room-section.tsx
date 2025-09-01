import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

const StudyRoomSection = () => {
  const studyRooms = [
    {
      name: "Quantum Physics Study Group",
      description: "Dive into quantum mechanics concepts, share notes, and discuss complex theories with peers.",
      members: 12,
      online: 5,
    },
    {
      name: "React Hooks Deep Dive",
      description: "Learn and master React Hooks through hands-on examples, Q&A sessions, and collaborative coding.",
      members: 8,
      online: 8,
    },
    {
      name: "Data Structures & Algorithms",
      description: "Practice solving problems, optimize code, and prepare for technical interviews together.",
      members: 23,
      online: 15,
    },
  ];

  return (
    <section className="my-4">
      <h2 className="text-xl font-semibold">Your study rooms</h2>
      <div className="flex gap-4 mt-2">
        {studyRooms.map((room) => (
          <Card key={room.name}>
            <CardContent className="p-4">
              <CardTitle className="text-lg hover:underline">
                <Link href={'/dashboard'}>
                  {room.name}
                </Link>
              </CardTitle>
              <p className=''>{room.description}</p>
              <div className="flex justify-between text-xs text-muted-foreground mt-4">
                <p>{room.members} members</p>
                <p>{room.online} online</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StudyRoomSection;
