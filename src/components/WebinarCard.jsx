import StarRating from "./StarRating"

function WebinarCard({ title, description, enrolledCount, price, rating }) {
  return (
    <div className="flex gap-4 border-b py-6">
      <div className="h-16 w-16 overflow-hidden rounded-md bg-blue-100">
        <img src="/placeholder.svg" alt="Webinar thumbnail" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="flex items-center gap-2">
            <StarRating rating={rating} />
            <span className="rounded bg-primary px-2 py-0.5 text-xs text-white">Active</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{enrolledCount} people have enrolled till now</span>
          <span className="font-medium">Price: ${price}</span>
        </div>
      </div>
    </div>
  )
}

export default WebinarCard

