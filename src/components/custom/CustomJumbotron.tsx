interface Props {
  title: string
  description: string
}
const CustomJumbotron = ({ title, description }: Props) => {
  return (
    <div className="mb-8 rounded-xl border p-8 text-center shadow-sm">
      <h1 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent">
        {title}
      </h1>
      {description && <p className="text-lg text-gray-600">{description}</p>}
    </div>
  )
}

export default CustomJumbotron
