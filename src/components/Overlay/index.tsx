"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

type ShowOverlayProps = { content: ReactNode; hideOnBackdropClick?: boolean };

const OverlayContext = createContext<{
  show: (_: ShowOverlayProps) => void;
  hide: () => void;
}>({
  show: () => {},
  hide: () => {},
});

export const OverlayProvider = ({ children }: { children?: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(true);
  const [hideOnBackdropClick, setHideOnBackdropClick] = useState(false);
  const contentRef = useRef<ReactNode | null>(null);
  const show = useCallback(
    ({ content, hideOnBackdropClick = true }: ShowOverlayProps) => {
      contentRef.current = content;
      setHideOnBackdropClick(hideOnBackdropClick);
      setClosed(false);
      setOpen(true);
    },
    [],
  );
  const hide = useCallback(() => setOpen(false), []);
  return (
    <OverlayContext.Provider
      value={{
        show,
        hide,
      }}
    >
      {children}
      {!closed && (
        <div
          onTransitionEnd={() => {
            if (!open) {
              contentRef.current = null;
              setClosed(true);
            }
          }}
          className={twMerge(
            "fixed inset-0 z-[1002] bg-black bg-opacity-80 transition-opacity duration-500 will-change-auto",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            onClick={() => {
              if (hideOnBackdropClick) {
                hide();
              }
            }}
            className="flex h-full w-full"
          >
            <button type="button" className="z-[1002]" onClick={hide}>
              <XMarkIcon className="absolute right-4 top-4 h-8 w-8 cursor-pointer text-white" />
            </button>
            <div className="z-20 m-auto">{contentRef.current}</div>
          </div>
        </div>
      )}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => useContext(OverlayContext);
