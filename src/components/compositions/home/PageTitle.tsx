interface PageProps {
    text: string
}

function PageTitle({ text }: PageProps) {
    return (
      <h1
        className="text-center leading-[45px] md:leading-[60px] font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {text}
      </h1>
    )
  }
  
  export default PageTitle