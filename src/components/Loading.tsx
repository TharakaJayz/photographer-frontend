
import { HashLoader } from 'react-spinners'

type Props = {
    extraStyles?:any
}

const Loading = (props: Props) => {
  return (
    <div className={`w-vw100 min-h-vh100 bg-white absolute top-0 left-0 opacity-90 transition  flex items-center justify-center text-blue-700 text-5xl z-30 ${props.extraStyles}`}>

    <HashLoader
        color="#36d694"
        cssOverride={{}}
        speedMultiplier={1}
    />
</div>
  )
}

export default Loading