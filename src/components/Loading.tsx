import { Oval } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Oval
        height={40}
        width={40}
        color="#000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#000"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </div>
  )
}
