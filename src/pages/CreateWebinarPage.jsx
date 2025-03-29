import { Link } from "react-router-dom"
import { ChevronLeft, Calendar, Upload, ToggleRight } from "lucide-react"
import Header from "../components/Header"
import Button from "../components/Button"
import Input from "../components/Input"
import Textarea from "../components/Textarea"

function CreateWebinarPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header showCreateButton={false} showLogoText={true} />

      <div className="px-4 py-6">
        <div className="mb-4">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium">
            <ChevronLeft className="h-4 w-4" />
            Create webinar
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6">
            <h2 className="mb-6 text-lg font-medium">Basic information</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Title <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Description <span className="text-red-500">*</span>
                  <span className="ml-1 text-xs font-normal text-muted-foreground">(Write a short introduction)</span>
                </label>
                <Textarea placeholder="Enter" className="min-h-[100px]" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea placeholder="Enter" className="min-h-[100px]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Enrollment date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input placeholder="Select date" />
                    <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Pricing <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Enter price" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6">
            <h2 className="mb-6 text-lg font-medium">Uploads</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Video <span className="text-red-500">*</span>
                </label>
                <div className="flex h-[140px] items-center justify-center rounded-md border-2 border-dashed border-gray-200">
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF</p>
                    <p className="text-xs text-muted-foreground">(max. 1200x600px)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Transcript</label>
                <div className="flex h-[140px] items-center justify-center rounded-md border-2 border-dashed border-gray-200">
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">Doc or CSV</p>
                    <p className="text-xs text-muted-foreground">(max. 5MB)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Mark this webinar active</span>
                <ToggleRight className="h-6 w-6 text-primary" />
              </div>

              <Button className="w-full bg-primary">Upload webinar</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CreateWebinarPage

