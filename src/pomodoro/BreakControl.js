import React from 'react';
import { minutesToDuration } from "../utils/duration";

function BreakControl({ breakIncrement, breakDecrement, breakDuration, session }){
    return(
        <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                    <span className="input-group-text" data-testid="duration-break">
                        Break Duration: {minutesToDuration(breakDuration)}
                    </span>
                    <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="decrease-break"
                            onClick={breakDecrement}
                            disabled={breakDuration === 1 || session}
                        >
                            <span className="oi oi-minus" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="increase-break"
                            onClick={breakIncrement}
                            disabled={breakDuration === 15 || session}
                        >
                            <span className="oi oi-plus" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreakControl;