import { FC, PropsWithChildren } from 'react'
import 'twin.macro'
import tw, { styled } from 'twin.macro'

const StyledProseWrapper = styled.div`
  // Base Styles
  ${tw`
    prose prose-invert w-full max-w-[50rem] mx-auto px-4
    prose-p:(text-justify)
    prose-ul:(list-['⋇'])
    prose-h2:(mt-0 pt-3)
    prose-h3:(mt-0 pt-2)
    prose-hr:(border-bbg-gray3)
    prose-img:(mx-auto border border-bbg-gray3 p-2)
  `}

  // Heading Anchors
  .heading-anchor {
    ${tw`no-underline!`}
  }

  // Table of Contents
  .table-of-contents {
    ${tw`border-b border-bbg-gray3 mb-6 pb-6`}
  }
  .table-of-contents > h2 {
    ${tw`text-sm text-gray-500 font-semibold pt-0`}
  }
  .table-of-contents > ol {
    ${tw`m-0`}
  }
  .table-of-contents > ol li {
    ${tw`my-0.5`}
  }
  .table-of-contents > ol li a {
    ${tw`no-underline font-semibold hover:(underline)`}
  }
`

export const ProseWrapper: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <>
      <StyledProseWrapper {...props}>{children}</StyledProseWrapper>
    </>
  )
}
