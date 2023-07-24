import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `College | ${title}`;
    }, [title])
}
export default useTitle;