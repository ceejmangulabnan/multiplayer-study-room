const RoomPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {

  const { slug } = await params

  return (
    <div className="min-h-screen p-6">
      Room ID: {slug}
    </div>
  )
}

export default RoomPage
