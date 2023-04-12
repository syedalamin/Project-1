import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='items-center flex h-40 justify-center bg-[#b8c2ff3a] rounded-md'>
                <h2 className='text-3xl font-bold text-black'>Blog Page</h2>
            </div>
            <div className='grid md:grid-cols-2 my-10  gap-5 '>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-[#7e8ffe1e] text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>When should you use context API</h2>
                    <p className='font-semibold'>React's Context API is a mechanism for transferring data down the component tree without having to explicitly give props at each level. When several parts of your program need to access the same data, you can utilize it in those circumstances.
                        Here are some circumstances when utilizing the Context API could be a good idea:The Context API may be used to control the theme's state throughout the whole app if you want to incorporate a theme switcher that allows users to alter the app's color scheme, font size, and other visual elements.
                        User Authentication: The Context API may be used to keep the user's authentication state when creating an application that supports user authentication.
                    </p>
                </div>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-[#7e8ffe1e] text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>What is a custom hook</h2>
                    <p className='font-semibold'>
                        Using one or more built-in React hooks as well as any other JavaScript code, a custom hook is a JavaScript function that performs a specified function. Stateful logic from functional components may be extracted and reused using custom hooks, which are commonly labeled with the prefix use. (e.g. useFetch, useModal, useWindowSize, etc.).
                        It is simpler to reuse the same functionality across your application when you utilize custom hooks to encapsulate sophisticated logic that can be shared between various components. They may be viewed as a mechanism to abstract and reuse features like lifecycle methods, effect handling, and state management that are often present in class-based components.
                    </p>
                </div>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-[#7e8ffe1e] text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>What is useRef?</h2>
                    <p className='font-semibold'>
                        A mutable object that survives across component re-renders may be created using the useRef hook offered by React. It provides a mutable ref object with a current property that may hold any value in its return.
                        UseRef is most frequently used to access and alter DOM elements, but it may also be used to store any other changeable value. Use useRef to gain immediate access to a component's underlying DOM node, which can be helpful for operations like setting focus, calculating sizes, or animating components.
                    </p>
                </div>
                <div className='border-2 border-[#7E90FE] p-4 rounded-md bg-[#7e8ffe1e] text-black text-center '>
                    <h2 className='font-bold text-2xl py-2'>What is useMemo?</h2>
                    <p className='font-semibold'>
                        React's useMemo hook caches a value if the function's input parameters have not changed while memoizing the output of a function. It is used to enhance a component's performance by preventing needless re-computation of pricey processes.
                        The function that computes the value and an array of dependencies on which the function depends are the two inputs for the useMemo hook. The method is recalculated and the updated result is returned if any of the dependents change. The cached value is shown if none of the dependents have changed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;