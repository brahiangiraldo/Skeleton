
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const SkeletonPersonal = (props) => {

  // console.log(rows)
  // console.log(skeletonHeigth);

  return (
    <>
      <SkeletonTheme baseColor = "#95A5A6"  HighlightColor = "#444" >
        <p>
           <Skeleton width={1350} height={100}/>
           <br />
          <Skeleton  count={ props.rows } height={props.skeletonHeigth} width={props.skeletonWidth} />
        </p>
      </SkeletonTheme>
    </>
  )
}