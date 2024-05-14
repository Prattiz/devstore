import { CurrentSearch } from '@/components/current-search'
import { SkeletonScreen } from '@/components/skeleton'
import { Suspense } from 'react'

export default function SearchLoading() {

  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch/>
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <SkeletonScreen className="h-[400px]" />
        <SkeletonScreen className="h-[400px]" />
        <SkeletonScreen className="h-[400px]" />
        <SkeletonScreen className="h-[400px]" />
        <SkeletonScreen className="h-[400px]" />
        <SkeletonScreen className="h-[400px]" />
      </div>
    </div>
  )
}