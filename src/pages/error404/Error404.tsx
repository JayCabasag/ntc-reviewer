export default function Error404() {
  return (
    <section className='h-screen w-screen flex items-center justify-center flex-col bg-gray-100'>
      <h1 className='text-4xl font-bold text-red-500 mb-4'>Error 404</h1>
      <p className='text-lg text-gray-600 mb-8'>The page you are looking for was not found.</p>
      <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200'>
        Go Back Home
      </button>
    </section>
  );
}
