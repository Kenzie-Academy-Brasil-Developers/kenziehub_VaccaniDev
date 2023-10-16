import { forwardRef } from "react";

export const Input = forwardRef(({label, error, ...rest}, ref) => {
    return (
        <div>
            <label className="headline" >
                {label}
                <input ref={ref} {...rest}/>
                {error? <p>{error.message}</p> : null}
            </label>
        </div>
    );
});