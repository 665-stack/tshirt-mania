import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tShirts, setTShirts] = useState();

    // I use laptop json data in t-shirt project. Because of data stortage.
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTShirts(data))
    }, [])

    return [tShirts, setTShirts];
}

export default useTShirts;