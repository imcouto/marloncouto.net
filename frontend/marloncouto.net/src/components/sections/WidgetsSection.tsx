export default function WidgetsSection({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section
        id='widgets'
        className='py-20'
      >
        <h2 className='text-3xl font-bold mb-8'>Widgets</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {children}
        </div>
      </section>
    </>
  )
}
