import Navbar from '@/components/common/navbar'

const SetupLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {

  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default SetupLayout
