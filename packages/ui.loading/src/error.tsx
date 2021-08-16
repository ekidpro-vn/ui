import QRCode from 'qrcode.react'
import styled from 'styled-components'

type ErrorProps = {
  support: string
  message?: string | JSX.Element
  className?: string
  supportLink?: string
}

const Component = styled.div`
  background: #3973aa;
  color: #fefeff;

  .icon {
    font-size: 6vw;
  }

  .msg {
    font-size: 3vw;
  }
`

export function ErrorComponent(props: ErrorProps) {
  const { message = "We found some problems that need to be fixed now. Please try again later", className, support, supportLink } = props

  return (
    <Component className={className ?? "p-4"}>
      <div className="flex flex-col space-y-4">
        <h1 className="icon">:(</h1>
        <h2 className="text-lg msg">{message}</h2>

        <div className="flex flex-col md:flex-row space-y-0 md:space-y-0 md:space-x-4 pt-16">
          <div className="border-2 border-white">
            <QRCode value={support} fgColor="#3973aa" size={192} />
          </div>
          <div className="text-xl flex-1 text-4xl">
            For more information about this issue and possible fixes, send us feedback via:
            <a className="ml-1 hover:text-blue-100 text-blue-200" href={supportLink ?? support}>{support}</a>
          </div>
        </div>
      </div>
    </Component>
  )
}