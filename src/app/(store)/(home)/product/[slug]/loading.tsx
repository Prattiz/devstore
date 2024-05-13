import { SkeletonScreen } from "@/components/skeleton";

export default function LoadingProductPage(){
    return(
        <div className="grid h-full grid-cols-9 grid-rows-6 gap-10">
            <SkeletonScreen className="col-span-6 row-span-6 h-[650px]"/>
            <SkeletonScreen className="col-span-3 row-span-3 h-[650px] " />   
        </div>
    )
}