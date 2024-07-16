import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface BottomSheetContextType {
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  setComponent: (component: React.ReactNode) => void;
}

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined
);

export const BottomSheetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [component, setComponent] = useState(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} />,
    []
  );
  return (
    <GestureHandlerRootView>
      <BottomSheetContext.Provider
        value={{ openBottomSheet, closeBottomSheet, setComponent }}
      >
        {children}
        {
          <BottomSheetModalProvider>
            <BottomSheetModal
              backdropComponent={renderBackdrop}
              ref={bottomSheetRef}
              index={1}
              snapPoints={["60%", "80%"]}
            >
              {component}
            </BottomSheetModal>
          </BottomSheetModalProvider>
        }
      </BottomSheetContext.Provider>
    </GestureHandlerRootView>
  );
};

export const useBottomSheet = (): BottomSheetContextType => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return context;
};
