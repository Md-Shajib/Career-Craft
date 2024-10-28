import { useState } from "react"

const useInputState = (defaultval = null) => {
    const [value, setValue] = useState(defaultval);
    const handleChange = val => {
        setValue(val.target.value);
    }
    return [value, handleChange]
}

export default useInputState;