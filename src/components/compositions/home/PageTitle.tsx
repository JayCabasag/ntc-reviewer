interface PageProps {
    text: string
}

function PageTitle({ text }: PageProps) {
    return (
      <h1 className="leading-relaxed font-primary font-extrabold text-2xl md:text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        {text}
      </h1>
    )
  }
  
  export default PageTitle