interface PageProps {
    text: string
}

function PageTitle({ text }: PageProps) {
    return (
      <h1
        className="max-w-7xl text-center leading-[45px] md:leading-[60px] font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-primary to-pink-600">
        {text}
      </h1>
    )
  }
  
  export default PageTitle