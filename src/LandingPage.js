/**
 * v0 by Vercel.
 * @see https://v0.dev/t/g1sHISJ8fua
 */
import React from 'react'
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import List from './List'
import Header from './Header'

import HeroImage from 'assets/hero4.webp'

export default function Component () {
  return (
    <>
      <Header />
      <div className="bg-[#f8f9fa]">
        <div className="container max-w-[970px] mx-auto py-20" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: '70%', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
          <div className="bg-white p-6 rounded-lg shadow-md opacity-90 inline-block">
            <h2 className="font-semibold mb-4" style={{ fontSize: 18 }}>
              Search over 2 million Hairdresser and Barber reviews and ratings.
            </h2>
            <div className="flex flex-col">
              <div className="mb-4">
                <Select>
                  <SelectTrigger id="specialty" className="max-w-xl">
                    <SelectValue placeholder="Choose a Specialty" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="hairdresser">Hairdresser</SelectItem>
                    <SelectItem value="barber">Barber</SelectItem>
                    <SelectItem value="colorist">Colorist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex mb-4 gap-4">
                <Input placeholder="City Name" />
                <Input placeholder="Hairdresser/Barber Name" />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <label className="inline-flex items-center mr-4">
                <input checked className="form-radio" name="gender" type="radio" value="all" />
                <span className="ml-2">All</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input className="form-radio" name="gender" type="radio" value="male" />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input className="form-radio" name="gender" type="radio" value="female" />
                <span className="ml-2">Female</span>
              </label>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Find a Hairdresser/Barber</Button>
          </div>
        </div>
        <div className="bg-white py-4">
          <div className="container mx-auto grid grid-cols-3 divide-x divide-gray-300 text-center">
            <div className="px-4">
              <p className="text-3xl font-semibold text-green-600">1.7 Million +</p>
              <p className="text-gray-700">Hairdressers and Barbers</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-semibold text-green-600">2.6 Million +</p>
              <p className="text-gray-700">Hairdresser/Barber Reviews</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-semibold text-green-600">161 Million +</p>
              <p className="text-gray-700">People Helped</p>
            </div>
          </div>
        </div>
      </div>
      <List />
    </>
  )
}
