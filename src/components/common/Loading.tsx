import React from "react";

export const DefaultLoading = ({ loading }: { loading: boolean }) => {
    return (
        loading &&
        <div className="fixed bottom-0 left-[0px] z-[999]">
            <div className="h-screen  bottom-0  w-screen z-50 flex justify-center backdrop-blur-[4px] items-center  ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        margin: "auto",
                        background: "0 0",
                        display: "block",
                        shapeRendering: "auto",
                    }}
                    width={124}
                    height={124}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid" 
                >
                    <rect x={47} y={24} rx={0} ry={0} width={6} height={12} fill="#0f4c81">
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.9166666666666666s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(30 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.8333333333333334s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(60 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.75s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(90 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.6666666666666666s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(120 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5833333333333334s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(150 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.5s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(180 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.4166666666666667s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(210 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.3333333333333333s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(240 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.25s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(270 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.16666666666666666s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(300 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="-0.08333333333333333s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x={47}
                        y={24}
                        rx={0}
                        ry={0}
                        width={6}
                        height={12}
                        fill="#0f4c81"
                        transform="rotate(330 50 50)"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            keyTimes="0;1"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </svg>
            </div>
        </div>
    );
};

export default DefaultLoading;