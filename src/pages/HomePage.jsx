import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Header from "../components/Header"
import WebinarCard from "../components/WebinarCard"
import Button from "../components/Button"

function HomePage() {
  const webinars = [
    {
      id: 1,
      title: "The Psychology of High-Performing Teams",
      description:
        "Discover the science behind team dynamics, motivation, and productivity. Learn how top-performing teams communicate, collaborate, and innovate in high-pressure environments.",
      enrolledCount: 430,
      price: 99,
      rating: 4.8,
    },
    {
      id: 2,
      title: "AI-Powered Marketing: The Future of Customer Engagement",
      description:
        "Explore how AI is revolutionizing digital marketing. From personalized recommendations to AI-generated content, learn how to optimize your marketing strategy with cutting-edge technology.",
      enrolledCount: 1450,
      price: 49,
      rating: 4.5,
    },
    {
      id: 3,
      title: "From Side Hustle to Startup: Turning Ideas into Income",
      description:
        "Have an idea but don't know where to start? This webinar walks you through building a profitable business, from validating your idea to launching and scaling it.",
      enrolledCount: 1000,
      price: 15,
      rating: 4.6,
    },
    {
      id: 4,
      title: "Mastering Sleep: The Secret to Peak Performance",
      description:
        "Learn how to optimize your sleep for better focus, energy, and productivity. Discover science-backed techniques to improve sleep quality and wake up refreshed every day.",
      enrolledCount: 550,
      price: 19,
      rating: 4.5,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gray-100 px-4 py-6">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-6">
          <div className="mb-6 flex gap-4">
            <Link to="/" className="rounded-md bg-white px-4 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="#" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-black">
              My bookmarks
            </Link>
          </div>

          <div className="space-y-2">
            {webinars.map((webinar) => (
              <WebinarCard
                key={webinar.id}
                title={webinar.title}
                description={webinar.description}
                enrolledCount={webinar.enrolledCount}
                price={webinar.price}
                rating={webinar.rating}
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border border-gray-200">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="h-1 w-6 rounded-full bg-primary"></div>
            <div className="h-1 w-2 rounded-full bg-gray-200"></div>
            <div className="h-1 w-2 rounded-full bg-gray-200"></div>
            <div className="h-1 w-2 rounded-full bg-gray-200"></div>
            <Button variant="default" size="icon" className="h-8 w-8 rounded-full bg-primary">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage

