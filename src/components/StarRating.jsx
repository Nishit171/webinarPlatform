import { Star } from "lucide-react"

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${star <= rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
        />
      ))}
      <span className="text-sm text-primary">{rating.toFixed(1)}</span>
    </div>
  )
}

export default StarRating

