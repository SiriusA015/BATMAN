export interface MenuBarProps {
  isViewMobile: boolean;
  setViewMobile: (value: boolean) => void;
}
const MenuBar = (props: MenuBarProps) => {
  const { isViewMobile, setViewMobile } = props;

  const handleOpenMenu = () => {
    setViewMobile(!isViewMobile);
  };
  return (
    <>
      <button
        onClick={handleOpenMenu}
        className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* {renderContent()} */}
    </>
  );
};

export default MenuBar;
