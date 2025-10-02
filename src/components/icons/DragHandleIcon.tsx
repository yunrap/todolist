/**
 * DragHandleIcon
 *
 * 드래그 핸들용 아이콘 컴포넌트
 * Material Design drag_handle 아이콘
 *
 * @param {React.SVGProps<SVGSVGElement>} props
 * @param {string} [props.fillColor]
 * @returns {JSX.Element}
 */

const DragHandleIcon = (
  props: React.SVGProps<SVGSVGElement> & { fillColor?: string }
) => (
  <svg
    role="img"
    aria-label="Drah handle icon"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill={props.fillColor || "#c0c0c0"}
    {...props}
  >
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </svg>
);
export default DragHandleIcon;
