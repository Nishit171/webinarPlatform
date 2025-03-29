import { Link } from "react-router-dom"
import { X } from "lucide-react"
import Logo from "./Logo"

function Header({ showAnnouncement = true, showCreateButton = true, showLogo = true, showLogoText = false }) {
  return (
    <header className="w-full">
      {showAnnouncement && (
        <div className="relative flex items-center justify-center bg-primary px-4 py-2 text-sm text-white">
          <span className="flex items-center gap-1">
            <span>✦ New webinar releasing on 23 April 2025.</span>
            <Link to="#" className="underline">
              Learn More
            </Link>
          </span>
          <button className="absolute right-4 text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      <div className="flex items-center justify-between px-4 py-4">
        {showLogo && <Logo showText={showLogoText} />}
        {showCreateButton && (
          <Link to="/create" className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-white">
            <span className="text-lg font-medium">+</span> Create webinar
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header

