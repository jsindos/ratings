/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CSxL4lI7Jyh
 */
import React from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tabs } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Header from './Header'
import { CircleUserRound } from 'lucide-react'
// import Link from 'next/link'

export default () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              {/* <Avatar alt="Profile Picture" className="w-20 h-20" src="/placeholder.svg?height=100&width=100" /> */}
              <CircleUserRound className='h-12 w-12' />
              <div>
                <h1 className="text-xl font-semibold">Mr. John Doe</h1>
                <p className="text-gray-600">Hairdresser / Barber</p>
                <p className="text-gray-500 text-sm">#1 of 15 Hairdressers / Barbers in Brunswick East, Victoria</p>
              </div>
            </div>
            <Button className="mb-4">Claim Profile</Button>
            {/* <div className="mb-6">
            <Tabs>
              <div className="flex space-x-4">
                <Button variant="ghost">Ratings</Button>
                <Button variant="ghost">Credentials</Button>
                <Button variant="ghost">Insurance</Button>
              </div>
            </Tabs>
          </div> */}
            <div style={{ border: '1px solid #efefef' }} className='p-8 rounded'>
              <h2 className="text-2xl font-semibold mb-4">Rate Mr. John Doe</h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2">Your ratings of this hairdresser / barber</p>
                {/* <div className="flex space-x-2 mb-2">
                  <Badge variant="secondary">Skill</Badge>
                  <Badge variant="secondary">Punctuality</Badge>
                  <Badge variant="secondary">Friendliness</Badge>
                  <Badge variant="secondary">Cleanliness</Badge>
                </div> */}
              </div>
              <form>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div className="flex flex-col">
                    <Label htmlFor="comment">Comment</Label>
                    <textarea
                      className="border-gray-300 rounded-md p-2"
                      id="comment"
                      placeholder="Please leave a comment with more detail about your experience."
                    />
                  </div>
                </div>
                <Button>Rate This Hairdresser / Barber</Button>
              </form>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Ratings for Mr. John Doe</h2>
              <p className="text-gray-600 mb-4">
                Your trust is important to us. No one can pay to remove ratings.{' '}
                {/* <Link className="text-blue-600" href="#"> */}
                Learn more
                {/* </Link> */}
              </p>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    {/* <div className="flex items-center">
                      <Badge variant="secondary">Skill</Badge>
                      <Badge className="ml-2" variant="secondary">
                        Punctuality
                      </Badge>
                      <Badge className="ml-2" variant="secondary">
                        Friendliness
                      </Badge>
                      <Badge className="ml-2" variant="secondary">
                        Cleanliness
                      </Badge>
                    </div> */}
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="mr-1" />
                      <span>August 6, 2023</span>
                    </div>
                  </div>
                  <p>Great hairdresser, very good experience. Definitely recommend</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    {/* <div className="flex items-center">
                      <Badge variant="secondary">Skill</Badge>
                      <Badge className="ml-2" variant="secondary">
                        Punctuality
                      </Badge>
                      <Badge className="ml-2" variant="secondary">
                        Friendliness
                      </Badge>
                      <Badge className="ml-2" variant="secondary">
                        Cleanliness
                      </Badge>
                    </div> */}
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="mr-1" />
                      <span>August 6, 2023</span>
                    </div>
                  </div>
                  <p>What a hairdresser!!! An amazing professional in every respect. Highly recommended.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CalendarIcon (props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
