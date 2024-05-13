import { SkeletonScreen } from "@/components/skeleton";


export default function LoadingHome(){

    return(
        <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
            <SkeletonScreen className="col-span-6 row-span-6 h-[850px]" />

            <SkeletonScreen className="col-span-3 row-span-3" />
            <SkeletonScreen className="col-span-3 row-span-3" />
        </div>
    )
}