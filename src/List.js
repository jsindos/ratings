/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ItjqKKdm9fF
 */
import React from 'react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">The Best Hairdressers near Brunswick, VIC</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <ul className="space-y-2">
            <li>
              <Button className="text-left w-full" variant="ghost">
                Hair Styling
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                Coloring Services
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                Haircuts for Women
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                Haircuts for Men
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                Hair Treatments
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                Extensions
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                Bridal Services
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                Children's Haircuts
              </Button>
            </li>
            <li>
              <Button className="text-left w-full" variant="ghost">
                View all services
              </Button>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Hair Stylists</h2>
            <Button variant="ghost">View All</Button>
          </div>
          <div className="flex flex-col gap-4">
            <Card className="w-full">
              <CardHeader>
                <Avatar alt="Hair Stylist" src="/placeholder.svg?height=40&width=40" />
                <div>
                  <CardTitle><a className="hover:underline cursor-pointer" onClick={() => navigate('/ratings')}>Sam Thompson</a></CardTitle>
                  <div className="flex items-center pt-4">
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                "Sam is a true artist with scissors. Always leaves me looking fabulous. Highly recommend!"
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Avatar alt="Hair Stylist" src="/placeholder.svg?height=40&width=40" />
                <div>
                  <CardTitle>Alex Johnson</CardTitle>
                  <div className="flex items-center pt-4">
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarHalfIcon className="text-yellow-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                "Alex has an amazing talent for color. Transformed my look completely. Can't wait for my next visit!"
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Avatar alt="Hair Stylist" src="/placeholder.svg?height=40&width=40" />
                <div>
                  <CardTitle>Jessica Lee</CardTitle>
                  <div className="flex items-center pt-4">
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                "Jessica is fantastic with trendy cuts. Always knows what's in style. Love my new haircut!"
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Avatar alt="Hair Stylist" src="/placeholder.svg?height=40&width=40" />
                <div>
                  <CardTitle>Chris Wallace</CardTitle>
                  <div className="flex items-center pt-4">
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarIcon className="text-yellow-400" />
                    <StarHalfIcon className="text-yellow-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                "Chris is the go-to for men's cuts. Great attention to detail and always a pleasant experience."
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function StarHalfIcon (props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  )
}

function StarIcon (props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
