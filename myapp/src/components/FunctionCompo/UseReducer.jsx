import React, { useReducer } from 'react';

function UseReducer(props) {
    const initialvalue = { counter: 0 }

    function Reducer(state, action) {
        switch (action.type) {
            case 'Increment':
                return { counter: state.counter + 1 }

            case 'Decrement':
                return { counter: state.counter - 1 }

            default: return state;

        }
    }
    const [state, dispatch] = useReducer(Reducer, initialvalue)


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-primary' onClick={() => {
                            dispatch({ type: 'Decrement' })
                        }}>Decrement</button>
                        <h1> {state.counter}</h1>
                        <button className='btn btn-success' onClick={() => {
                            dispatch({ type: 'Increment' })
                        }}>Decrement</button>


                    </div>
                </div>
            </div>
        </>
    );
}

export default UseReducer;