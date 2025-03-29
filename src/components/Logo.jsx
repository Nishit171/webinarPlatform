import { Link } from "react-router-dom"

function Logo({ showText = false }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="h-8 w-8 rounded bg-primary"></div>
      {showText && <span className="text-lg font-medium">Financewithsharan</span>}
    </Link>
  )
}

export default Logo

