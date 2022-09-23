import { HomeCoinList } from '@components/home/HomeCoinList'
import { HomeHeader } from '@components/home/HomeHeader'
import { ParsedSharedStaticProps } from '@shared/getSharedStaticProps'
import { FC, PropsWithChildren, useRef } from 'react'
import 'twin.macro'
import { HomeResourcesList } from './HomeResourcesList'

export interface HomeLayoutProps extends ParsedSharedStaticProps {}
export const HomeLayout: FC<PropsWithChildren<HomeLayoutProps>> = ({
  coins,
  resources,
  children,
}) => {
  const detailsPageRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <main tw="grow grid gap-1 p-1 lg:(grid-cols-2 h-[100vh] max-h-[100vh])">
        <div tw="flex flex-col space-y-1 lg:(max-h-full overflow-hidden)">
          <HomeHeader tw="shrink-0" />
          <HomeCoinList tw="grow max-h-[40vh] lg:max-h-[none]" coins={coins} />
          <HomeResourcesList tw="shrink-0" resources={resources} />
        </div>

        <div tw="contents" ref={detailsPageRef}>
          {children}
        </div>
      </main>
    </>
  )
}
