import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroCarousel() {
  return (
    <Carousel className="w-full rounded-md">
      <CarouselContent>
        <CarouselItem key={1}>
          <Card className='border-none'>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <Image
                src={`/static/images/spices.jpg`}
                width={500}
                height={500}
                alt="Spirces"
                className='object-cover object-center rounded w-full'
              />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem key={2}>
          <Card className='border-none'>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <Image
                src={`/static/images/cowboy-lump.jpg`}
                width={500}
                height={500}
                alt="Spirces"
                className='object-cover object-center rounded w-full'
              />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
