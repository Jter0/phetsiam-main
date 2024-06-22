function ViewMoreRight(props) {
  return (
    <svg width={43} height={30} fill="none" {...props}>
      <ellipse
        opacity={0.2}
        cx={28.137}
        cy={14.637}
        rx={14.5}
        ry={14.863}
        transform="rotate(-90 28.137 14.637)"
        fill="currentColor"
      />
      <path
        d="M1.383 14.137a.5.5 0 000 1v-1zm30.08.853a.5.5 0 000-.707l-3.182-3.182a.5.5 0 10-.707.707l2.828 2.829-2.828 2.828a.5.5 0 00.707.707l3.182-3.182zm-30.08.147H31.11v-1H1.383v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ViewMoreRight;
