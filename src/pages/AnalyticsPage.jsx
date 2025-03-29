import { ChevronDown, Play, TrendingDown, TrendingUp } from "lucide-react"
import Header from "../components/Header"
import StarRating from "../components/StarRating"
import Button from "../components/Button"

function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header showAnnouncement={false} />

      <div className="px-6 py-8">
        <div className="mx-auto max-w-6xl rounded-lg bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold">The Psychology of High-Performing Teams</h1>
                  <div className="flex items-center gap-2">
                    <StarRating rating={4.8} />
                    <span className="rounded bg-primary px-2 py-0.5 text-xs text-white">Active</span>
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Discover the science behind team dynamics, motivation, and productivity. Learn how top-performing
                  teams communicate, collaborate, and innovate in high-pressure environments.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">430 people have enrolled till now</span>
                  <span className="font-medium">Price: $ 99</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium">Total views</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 gap-1 text-sm">
                      Views <ChevronDown className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 gap-1 text-sm">
                      This Month <ChevronDown className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="relative h-[200px] w-full">
                  <div className="absolute bottom-0 left-0 h-[180px] w-full">
                    <svg viewBox="0 0 800 200" className="h-full w-full">
                      <path
                        d="M0,180 C50,160 100,140 150,160 C200,180 250,120 300,140 C350,160 400,120 450,100 C500,80 550,40 600,100 C650,160 700,140 750,120 L750,200 L0,200 Z"
                        fill="rgba(109, 40, 217, 0.1)"
                      />
                      <path
                        d="M0,180 C50,160 100,140 150,160 C200,180 250,120 300,140 C350,160 400,120 450,100 C500,80 550,40 600,100 C650,160 700,140 750,120"
                        fill="none"
                        stroke="rgba(109, 40, 217, 0.5)"
                        strokeWidth="2"
                      />
                      <circle cx="450" cy="100" r="6" fill="rgba(109, 40, 217, 1)" />
                      <text x="450" y="80" textAnchor="middle" fontSize="12" fill="rgba(109, 40, 217, 1)">
                        80.2%
                      </text>
                    </svg>
                  </div>

                  <div className="absolute bottom-0 left-0 flex w-full justify-between px-2 text-xs text-muted-foreground">
                    {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>

                  <div className="absolute left-0 top-0 flex h-full flex-col justify-between py-2 text-xs text-muted-foreground">
                    <span>100k</span>
                    <span>80k</span>
                    <span>60k</span>
                    <span>40k</span>
                    <span>20k</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div>
                  <div className="mb-1 flex items-center gap-1">
                    <h3 className="text-sm font-medium">Webinar Revenue</h3>
                    <TrendingDown className="h-3 w-3 text-red-500" />
                    <span className="text-xs text-red-500">10%</span>
                  </div>
                  <p className="text-2xl font-semibold text-primary">$868</p>
                  <p className="text-xs text-muted-foreground">143 Orders</p>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-1">
                    <h3 className="text-sm font-medium">Affiliate Revenue</h3>
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-500">32%</span>
                  </div>
                  <p className="text-2xl font-semibold text-primary">$368</p>
                  <p className="text-xs text-muted-foreground">32k Visitors</p>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-1">
                    <h3 className="text-sm font-medium">Subscribers</h3>
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-500">8.1%</span>
                  </div>
                  <p className="text-2xl font-semibold text-primary">3,422</p>
                  <p className="text-xs text-muted-foreground">$32.48 Average Order</p>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-1">
                    <h3 className="text-sm font-medium">Monthly active users</h3>
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-500">10.0%</span>
                  </div>
                  <p className="text-2xl font-semibold text-primary">3000</p>
                  <p className="text-xs text-muted-foreground">Wed, Jul 20</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-lg font-medium">Affiliates</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    { name: "Amazon", logo: "/placeholder.svg", price: 49 },
                    { name: "YouTube", logo: "/placeholder.svg", price: 49 },
                    { name: "Shopify", logo: "/placeholder.svg", price: 49 },
                    { name: "TikTok", logo: "/placeholder.svg", price: 49 },
                  ].map((affiliate, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h3 className="mb-2 text-sm font-medium">{affiliate.name}</h3>
                      <div className="mb-4 h-12">
                        <img
                          src={affiliate.logo || "/placeholder.svg"}
                          alt={affiliate.name}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Price: ${affiliate.price}</span>
                        <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                          Add
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border-2 border-dashed border-blue-200 p-4">
                <div className="relative aspect-video overflow-hidden rounded-md bg-blue-50">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-sm">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-center text-sm font-medium">Sharan Hegde</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-lg font-medium">Total number of attendees</h2>
                <p className="text-5xl font-semibold text-primary">500k</p>
              </div>

              <div>
                <h2 className="mb-2 text-lg font-medium">Total revenue generated</h2>
                <p className="text-5xl font-semibold text-primary">$1,236</p>
                <p className="text-xs text-muted-foreground">*Affiliate + Purchases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AnalyticsPage

