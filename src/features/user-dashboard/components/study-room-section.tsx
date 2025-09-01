"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

const StudyRoomSection = () => {
  const supabase = createClient()

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

  const createRoom = async () => {
    const response = await supabase.from('rooms').insert({ name: "test" })
    console.log("insert response", response)
  }

  return (
    <section className="my-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your study rooms</h2>
        <Button onClick={createRoom}>Create room</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {studyRooms.map((room) => (
          <Card key={room.name} className="flex flex-col">
            <CardContent className="p-4 flex flex-col grow justify-between">
              <div className="grow">
                <CardTitle className="text-lg hover:underline underline-offset-4">
                  <Link href="/dashboard">{room.name}</Link>
                </CardTitle>
                <p>{room.description}</p>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-8">
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
